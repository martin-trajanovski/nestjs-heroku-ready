import { Module } from '@nestjs/common';

import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';

@Module({
	imports: [],
	controllers: [CompaniesController],
	providers: [CompaniesService],
})
export class CompaniesModule {}
