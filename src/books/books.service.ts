import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions, Op } from 'sequelize';
import { AuthorsService } from 'src/authors/authors.service';
import { FilesService } from 'src/files/files.service';
import { BookStatistics } from 'src/statistics/models';
import { AddBookDto, CreateBookDto } from './dto';
import { PaginationData, SearchParams } from './interfaces';
import { Book, BookImage } from './models';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book)
        private bookRepository: typeof Book,
        @InjectModel(BookStatistics)
        private statisticsRepository: typeof BookStatistics,
        @InjectModel(BookImage)
        private bookImageRepository: typeof BookImage,
        private authorsService: AuthorsService,
        private filesService: FilesService
    ) {}

    async getBooks(searchParams: SearchParams, booksPerPage: number): Promise<PaginationData> {
        if (!searchParams.offset)
            searchParams.offset = '0';
        
        const findOptions: FindOptions<Book> = {
            attributes: [
                'id', 'title', 
                'year_of_publication', 'pages', 
                'description'
            ],
            where: {
                title: {
                    [Op.substring]: searchParams.search ? searchParams.search : ''
                }
            },
            offset: +searchParams.offset,
            limit: booksPerPage,
            include: {
                all: true
            }
        };

        const booksDataLength = await this.bookRepository.count({
            distinct: true,
            col: 'title',
            ...findOptions
        });
        
        if (booksDataLength < +searchParams.offset) {
            findOptions.offset = booksDataLength - booksPerPage;
        }
        
        const booksDataPerPage = await this.bookRepository.findAll({
            ...findOptions
        });

        return {
            booksDataPerPage,
            booksDataLength,
            pageQuantity: Math.ceil(booksDataLength / booksPerPage)
        }
    }

    async getBook(id: number) {
        const book = await this.bookRepository.findByPk(id, {include: {all: true}});
        if (!book) {
            throw new HttpException('Книга не была найдена', HttpStatus.NOT_FOUND);
        }
        return book;
    }

    async createBook(dto: CreateBookDto, image: any) {
        const newBook = await this.bookRepository.create({
            title: dto.title,
            year_of_publication: dto.year,
            pages: dto.pages,
            description: dto.description
        });

        await this.statisticsRepository.create({                   
            book_id: newBook.id,
        });
        const fileName = this.filesService.createBookImageFile(image);
        await this.bookImageRepository.create({
            fileName,
            book_id: newBook.id
        });

        return newBook;
    }

    async addBook(dto: AddBookDto, image: any) {
        const newBook = await this.createBook(dto, image);
        
        dto.authorsNames = dto.authorsNames.filter(name => name !== '');
        
        const authorsIds: number[] = [];
        for (let i = 0; i < dto.authorsNames.length; i++) {
            const author = await this.authorsService.getByName(dto.authorsNames[i]);
            console.log(author);
            
            if (!author) {
                const newAuthor = await this.authorsService.createAuthor({name: dto.authorsNames[i]});
                authorsIds.push(newAuthor.id);
                continue;
            }
            authorsIds.push(author.id);
        }
        await newBook.$add('authors', authorsIds);
    }

    async softDeleteBook(id: number) {
        await this.bookRepository.destroy({
            where: {
                id
            }
        });
    }

    async deleteSoftDeletedBooks() {
        const booksToDelete = await this.bookRepository.findAll({
            where: {
                deletedAt: {
                    [Op.not]: null
                }
            },
            include: [
                { model: BookImage }
            ],
            paranoid: false
        });
        await this.bookRepository.destroy({
            where: {
                deletedAt: {
                    [Op.not]: null
                }
            },
            force: true
        });
        return booksToDelete;
    }
}
