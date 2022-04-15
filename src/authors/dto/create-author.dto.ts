import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty({message: 'Не может быть пустым'})
    @IsString({message: 'Должно быть сторокой'})
    name: string;
}