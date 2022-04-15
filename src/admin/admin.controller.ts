import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, Render, Res, UploadedFile, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { UnauthorizedExceptionFilter } from 'src/auth/basic-auth.filter';
import { BasicAuthGuard } from 'src/auth/basic-auth.guard';
import { BooksService } from 'src/books/books.service';
import { AddBookDto } from 'src/books/dto';
import { SearchParams } from 'src/books/interfaces';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('admin')
@UseGuards(BasicAuthGuard)
@UseFilters(UnauthorizedExceptionFilter)
export class AdminController {
    constructor (
        private booksService: BooksService
    ) {}

    @Get()
    @Render('admin-page/admin')
    async getBooks(@Query() qsParams: SearchParams) {
        const booksPerPage = 6;
        const booksData = await this.booksService.getBooks(qsParams, booksPerPage);
        return {
            ...booksData,
            booksPerPage,
            qsParams,
            NODE_ENV: process.env.NODE_ENV
        };
    }

    @Post('api/v1/create')
    @UsePipes(ValidationPipe)
    @UseInterceptors(FileInterceptor('bookImage'))
    async addBook(@Body() dto: AddBookDto,
                  @UploadedFile() image: any,
                  @Res() res: Response) {
        await this.booksService.addBook(dto, image);
        return res.redirect('back');
    }

    @Delete('api/v1/delete/:id')
    async softDeleteBook(@Param('id') id: number) {
        await this.booksService.softDeleteBook(id);
    }

    @Post('logout')
    @HttpCode(401)
    logout() {}
}
