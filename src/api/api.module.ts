import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompaniesModule } from './companies/companies.module';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://angular-nestjs-db-user2:angularnestuser2@ds123372.mlab.com:23372/angular-nestjs-db'),
		CompaniesModule
	],
	controllers: [ApiController],
	providers: [ApiService],
})
export class ApiModule {}
