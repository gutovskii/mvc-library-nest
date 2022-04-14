import { Controller, Get, Param, Post, Query, Render } from '@nestjs/common';
import { BooksService } from './books.service';
import { SearchParams } from './interfaces';

@Controller('/')
export class BooksController {
    constructor (
        private booksService: BooksService
    ) {}

    @Get()
    @Render('books-page/books.pug')
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

    @Get('book/:id')
    @Render('book-page/book')
    async getBook(@Param('id') id: number) {
        const book = await this.booksService.getBook(id);
        return {
            bookData: book
        };
    }
}
