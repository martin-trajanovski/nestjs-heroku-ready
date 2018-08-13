import { Injectable, NotFoundException } from '@nestjs/common';
import * as crypto from 'crypto';

import { CompanyDto } from './company.dto';
import { companiesTestData } from './companies-test-data';

@Injectable()
export class CompaniesService {
	private customers = companiesTestData;

	getAllCompanies(): Array<CompanyDto> {
		return this.customers;
	}

	getCompanyById(id: string): CompanyDto {
		let companyToReturn;

		if (id && id.length === 32) {
			companyToReturn = this.customers.find(company => company._id === id);
		}

		if (companyToReturn) {
			return companyToReturn;
		} else {
			throw new NotFoundException();
		}
	}

	createCompany(newCompany: CompanyDto): CompanyDto {
		const id = crypto.randomBytes(16).toString('hex');

		const newCompanyToInsert = {
			_id: id,
			isActive: true,
			company: newCompany.company,
			logo: newCompany.logo,
			industry: newCompany.industry,
			about: newCompany.about,
			projects: newCompany.projects
		};

		this.customers.push(newCompanyToInsert);

		return newCompanyToInsert;
	}

	updateCompany(id: string, companyData: CompanyDto): CompanyDto {
		let companyToUpdateIndex;

		if (id && id.length === 32) {
			companyToUpdateIndex = this.customers.findIndex(company => company._id === id);
		}

		if (companyToUpdateIndex) {
			this.customers[companyToUpdateIndex] = {
				_id: this.customers[companyToUpdateIndex]._id,
				isActive: companyData.isActive || this.customers[companyToUpdateIndex].isActive,
				company: companyData.company || this.customers[companyToUpdateIndex].company,
				logo: companyData.logo || this.customers[companyToUpdateIndex].logo,
				industry: companyData.industry || this.customers[companyToUpdateIndex].industry,
				about: companyData.about || this.customers[companyToUpdateIndex].about,
				projects: companyData.projects || this.customers[companyToUpdateIndex].projects
			};

			return this.customers[companyToUpdateIndex];
		} else {
			throw new NotFoundException();
		}
	}

	removeCompany(id: string): CompanyDto {
		let companyToRemoveIndex;

		if (id && id.length === 32) {
			companyToRemoveIndex = this.customers.findIndex(company => company._id === id);
		}

		if (companyToRemoveIndex) {
			const companyToRemove = this.customers[companyToRemoveIndex];

			this.customers.splice(companyToRemoveIndex, 1);

			return companyToRemove;
		} else {
			throw new NotFoundException();
		}
	}
}
