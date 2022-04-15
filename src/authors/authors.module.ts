import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorsService } from './authors.service';
import { Author } from './models';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Author
    ])
  ],
  exports: [AuthorsService],
  providers: [AuthorsService]
})
export class AuthorsModule {}
