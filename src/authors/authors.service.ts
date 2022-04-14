import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './models';

@Injectable()
export class AuthorsService {
    constructor (
        @InjectModel(Author)
        private authorRepository: typeof Author
    ) {}

    async getByName(name: string) {
        const author = await this.authorRepository.findOne({
            where: {
                name
            }
        });
        return author;
    }

    async createAuthor(dto: CreateAuthorDto) {
        const newAuthor = await this.authorRepository.create({
            name: dto.name
        });
        return newAuthor;
    }
}
