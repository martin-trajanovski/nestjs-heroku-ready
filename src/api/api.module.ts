import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompaniesModule } from './companies/companies.module';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import * as environment from '../../env';

@Module({
	imports: [
		MongooseModule.forRoot(environment.MONGODB_CONFIG.databaseURL),
		CompaniesModule
	],
	controllers: [ApiController],
	providers: [ApiService],
})
export class ApiModule {}
