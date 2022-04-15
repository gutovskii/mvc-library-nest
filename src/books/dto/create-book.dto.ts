import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({message: 'Не может быть пустым'})
    @IsString({message: 'Должно быть строкой'})
    title: string;

    @Transform(obj => +obj.value)
    @IsInt({message: 'Должен быть целочисленным'})
    @Min(0, {message: 'Должен быть больше нуля'})
    year: number;

    @Transform(obj => +obj.value)
    @IsInt({message: 'Должен быть целочисленным'})
    @Min(0, {message: 'Должен быть больше 0'})
    pages: number;
    
    @IsString({message: 'Должно быть строкой'})
    description?: string;
}