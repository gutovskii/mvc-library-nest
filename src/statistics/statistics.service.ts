import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BookStatistics } from './models';

@Injectable()
export class StatisticsService {
    constructor (
        @InjectModel(BookStatistics)
        private statisticsRepository: typeof BookStatistics
    ) {}

    async updateClicked(id: number) {
        const statistics = await this.statisticsRepository.findOne({
            where: {
                book_id: id
            }
        });
        if (!statistics) {
            throw new HttpException('Книга не найдена', HttpStatus.NOT_FOUND);
        }
        statistics.clicked++;
        await statistics.save();
    }

    async updateWishful(id: number) {
        const statistics = await this.statisticsRepository.findOne({
            where: {
                book_id: id
            }
        });
        if (!statistics) {
            throw new HttpException('Книга не найдена', HttpStatus.NOT_FOUND);
        }
        statistics.wishful++;
        await statistics.save();
    }
}
