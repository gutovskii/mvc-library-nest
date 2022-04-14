import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from './models';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Author
    ])
  ],
  exports: [AuthorsService],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
