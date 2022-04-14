import { Controller, Param, Put } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('api/v1')
export class StatisticsController {
    constructor (
        private statisticsService: StatisticsService
    ) {}

    @Put('clicked/:id')
    async updateClicked(@Param('id') id: number) {
        await this.statisticsService.updateClicked(id);
        return {
            done: true
        }
    }

    @Put('wishful/:id')
    async updateWishful(@Param('id') id: number) {
        await this.statisticsService.updateWishful(id);
        return {
            done: true
        }
    }
}
