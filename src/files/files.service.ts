import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { FileWritingException } from 'src/exceptions/file-writing.exception';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from 'src/books/models';

@Injectable()
export class FilesService {
    constructor (
        @InjectModel(Book)
        private bookRepository: typeof Book
    ) {}

    createBookImageFile(file: any) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('.', 'views', 'books-page', 'books-page_files', 'images');
            fs.opendir(filePath, err => {
                if (err) {
                    fs.mkdir(filePath, {recursive: true}, err => {
                        if (err) throw new FileWritingException(err);
                    });
                };
                fs.writeFile(path.join(filePath, fileName), file.buffer, err => {
                    if (err) throw new FileWritingException(err);
                });
            });
            return fileName;
        } catch (err) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    deleteBookImageFiles(booksToDelete: Book[]) {
        for (let i = 0; i < booksToDelete.length; i++) {
            const bookImagePath = path.join('views', 'books-page', 'books-page_files', 'images', booksToDelete[i].image.fileName);
            fs.open(bookImagePath, 'r', err => {
                if (!err) {
                    fs.unlink(bookImagePath, err => {
                        if (err) throw err;
                    });
                }
            })
        }
        console.log('Soft-deleted books deleted');
    }
}
