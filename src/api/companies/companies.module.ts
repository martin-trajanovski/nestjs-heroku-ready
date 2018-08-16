import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CompanySchema } from './schemas/companies.schema';

@Module({
	imports: [MongooseModule.forFeature([
		{
			name: 'companies',
			schema: CompanySchema
		}
	])],
	controllers: [CompaniesController],
	providers: [CompaniesService],
})
export class CompaniesModule {}
