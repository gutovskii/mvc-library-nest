import { CreateBookDto } from "./create-book.dto";

export class AddBookDto extends CreateBookDto {
    authorsNames: string[];
}