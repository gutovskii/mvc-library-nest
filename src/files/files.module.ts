import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from 'src/books/models';
import { FilesService } from './files.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Book])
  ],
  exports: [FilesService],
  providers: [FilesService]
})
export class FilesModule {}
