import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Author } from "src/authors/models/authors.model";
import { Book } from "./books.model";

@Table({tableName: 'books_authors', createdAt: false, updatedAt: false})
export class BooksAuthors extends Model<BooksAuthors> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ForeignKey(() => Book)
    @Column({type: DataType.INTEGER})
    book_id: number;

    @ForeignKey(() => Author)
    @Column({type: DataType.INTEGER})
    author_id: number;
}