import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { BooksAuthors } from "src/books/models";
import { Book } from "src/books/models/books.model";

interface AuthorCreateAttrs {
    name: string
}

@Table({tableName: 'authors', underscored: true})
export class Author extends Model<Author, AuthorCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @BelongsToMany(() => Book, () => BooksAuthors)
    books: Book[]
}