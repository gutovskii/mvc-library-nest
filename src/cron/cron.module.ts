import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BooksModule } from 'src/books/books.module';
import { FilesModule } from 'src/files/files.module';
import { CronService } from './cron.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BooksModule,
    FilesModule
  ],
  providers: [CronService]
})
export class CronModule {}
