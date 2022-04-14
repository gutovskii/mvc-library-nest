import { Book } from "../models";

export interface PaginationData {
    booksDataPerPage: Book[];
    booksDataLength: number;
    pageQuantity: number;
}