import { HttpException, HttpStatus } from "@nestjs/common";

interface Exceptions {
    property: string,
    constraints: string
}

export class ValidationException extends HttpException {
    errorMessages: Exceptions[];

    constructor(errorMessages) {
        super(errorMessages, HttpStatus.BAD_REQUEST);
        this.errorMessages = errorMessages;
    }
}