import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AdminController]
})
export class AdminModule {}
