import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Book } from "./books.model";

interface FilesCoverModelCreateAttrs {
    fileName: string,
    book_id: number
}

@Table({tableName: 'books-images', createdAt: false, updatedAt: false})
export class BookImage extends Model<BookImage, FilesCoverModelCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    fileName: string;

    @Column({type: DataType.INTEGER})
    @ForeignKey(() => Book)
    book_id: number;

    @BelongsTo(() => Book)
    book: Book;
}