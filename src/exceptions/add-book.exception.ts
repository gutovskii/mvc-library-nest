import { HttpException, HttpStatus } from "@nestjs/common";

interface Exceptions {
    property: string,
    constraints: string
}

export class AddBookException extends HttpException {
    errorMessages: Exceptions[];

    constructor(errorMessages: Exceptions[]) {
        super(errorMessages, HttpStatus.BAD_REQUEST);
        this.errorMessages = errorMessages;
    }
}