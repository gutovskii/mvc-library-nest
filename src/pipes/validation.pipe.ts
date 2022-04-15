import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exceptions/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform {
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
            throw new ValidationException(errorMessages);
        }
        return value;
    }
}