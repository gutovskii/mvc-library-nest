import { BelongsToMany, Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Author } from "src/authors/models/authors.model";
import { BookStatistics } from "../../statistics/models/books-statistics.model";
import { BooksAuthors } from "./books_authors.model";
import { BookImage } from "./books-images.model";

interface BooksCreateAttrs {
    title: string,
    year_of_publication: number,
    pages: number,
    description: string
}

@Table({tableName: 'books', underscored: true, paranoid: true})
export class Book extends Model<Book, BooksCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    title: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    year_of_publication: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    pages: number;

    @Column({type: DataType.STRING})
    description: string;

    @BelongsToMany(() => Author, () => BooksAuthors)
    authors: Author[];

    @HasOne(() => BookStatistics)
    statistics: BookStatistics;

    @HasOne(() => BookImage)
    image: BookImage;
}