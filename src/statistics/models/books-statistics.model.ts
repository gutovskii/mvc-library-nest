import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Book } from "../../books/models/books.model";

interface BookStatisticsCreateAttrs {
    book_id: number
}

@Table({tableName: 'books-statistics', createdAt: false, updatedAt: false})
export class BookStatistics extends Model<BookStatistics, BookStatisticsCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.INTEGER, defaultValue: 0})
    clicked: number;

    @Column({type: DataType.INTEGER, defaultValue: 0})
    wishful: number;

    @Column({type: DataType.INTEGER})
    @ForeignKey(() => Book)
    book_id: number;

    @BelongsTo(() => Book)
    book: Book;
}