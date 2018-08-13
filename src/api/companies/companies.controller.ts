import { Controller, Get, Post, HttpCode, Body, Query, Put, Param, Delete } from '@nestjs/common';

import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
	constructor(private readonly $companies: CompaniesService) {}

	@Post()
	@HttpCode(200)
	create(@Body() createCompany) {
		return this.$companies.createCompany(createCompany);
	}

	@Get()
	findAll(@Query() query) {
		return this.$companies.getAllCompanies();
	}

	@Get(':id')
	findOne(@Param('id') id) {
		return this.$companies.getCompanyById(id);
	}

	@Put(':id')
	update(@Param('id') id, @Body() updateCatDto) {
		return this.$companies.updateCompany(id, updateCatDto);
	}

	@Delete(':id')
	remove(@Param('id') id) {
		return this.$companies.removeCompany(id);
	}
}
