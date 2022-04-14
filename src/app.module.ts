import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { Book, BookImage, BooksAuthors } from './books/models';
import { Author } from './authors/models';
import { AdminModule } from './admin/admin.module';
import { StatisticsModule } from './statistics/statistics.module';
import { BookStatistics } from './statistics/models';
import { FilesModule } from './files/files.module';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [
        Book,
        Author,
        BooksAuthors,
        BookStatistics,
        BookImage
      ],
      autoLoadModels: true
    }),
    BooksModule,
    AuthorsModule,
    AdminModule,
    StatisticsModule,
    FilesModule,
    CronModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
