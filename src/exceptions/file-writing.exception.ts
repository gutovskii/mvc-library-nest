import { HttpException, HttpStatus } from "@nestjs/common";

export class FileWritingException extends HttpException {
    error: NodeJS.ErrnoException;

    constructor(response: NodeJS.ErrnoException) {
        super(response, HttpStatus.INTERNAL_SERVER_ERROR);
        this.error = response;
    }
}