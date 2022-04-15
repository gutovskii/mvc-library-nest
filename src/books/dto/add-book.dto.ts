import { Transform } from "class-transformer";
import { ArrayMinSize, IsArray } from "class-validator";
import { CreateBookDto } from "./create-book.dto";

export class AddBookDto extends CreateBookDto {
    @Transform(array => array.value.filter((name: string) => name != ''))
    @IsArray()
    @ArrayMinSize(1, {message: 'Должен быть хотя бы один автор'})
    authorsNames: string[];
}