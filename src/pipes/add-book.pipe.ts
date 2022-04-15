import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { AddBookException } from "src/exceptions/add-book.exception";

@Injectable()
export class AddBookPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const obj = plainToInstance(metadata.metatype, value);
        const errors = await validate(obj);
        
        if (errors.length > 0) {
            const errorMessages = errors.map(error => {
                return {
                    property: error.property,
                    constraints: Object.values(error.constraints).join(', ')
                }
            });
            throw new AddBookException(errorMessages);
        }
        return value;
    }
}