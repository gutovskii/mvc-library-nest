import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorsModule } from 'src/authors/authors.module';
import { FilesModule } from 'src/files/files.module';
import { BookStatistics } from 'src/statistics/models';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, BookImage } from './models';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Book,
      BookImage,
      BookStatistics,
    ]),
    AuthorsModule,
    FilesModule
  ],
  exports: [BooksService],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
