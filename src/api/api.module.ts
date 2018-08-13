import { Module } from '@nestjs/common';

import { CompaniesModule } from './companies/companies.module';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
	imports: [CompaniesModule],
	controllers: [ApiController],
	providers: [ApiService],
})
export class ApiModule {}
