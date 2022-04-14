import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import mysqldump from 'mysqldump';
import { BooksService } from 'src/books/books.service';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class CronService {
    constructor (
        private booksService: BooksService,
        private filesService: FilesService
    ) {}

    @Cron(CronExpression.EVERY_HOUR)
    createDump() {
        mysqldump({
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS
            },
            dumpToFile: 'backups/dbmysqldump.sql'
        })
        console.log('Backup created');
    }

    @Cron(CronExpression.EVERY_30_MINUTES)
    async deleteSoftDeletedBooks() {
        const booksToDelete = await this.booksService.deleteSoftDeletedBooks();
        this.filesService.deleteBookImageFiles(booksToDelete);
    }
}
