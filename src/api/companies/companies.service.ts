import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as crypto from 'crypto';

import { Company } from './interfaces/company.interface';
import { CompanyDto } from './dto/company.dto';

@Injectable()
export class CompaniesService {
	constructor(@InjectModel('companies') private readonly companyModel: Model<Company>) {}

	async getAllCompanies(): Promise<Company[]> {
		return await this.companyModel.find().exec();
	}

	async getCompanyById(id: string): Promise<Company> {
		if (id && id.length === 32) {
			try {
				return await this.companyModel.findById(id).exec();
			} catch {
				throw new NotFoundException();
			}
		} else {
			throw new HttpException({
				status: HttpStatus.FORBIDDEN,
				error: 'Bad company id.',
			}, 403);
		}
	}

	async createCompany(newCompany: CompanyDto): Promise<Company> {
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

		const createdCompany = new this.companyModel(newCompanyToInsert);

		return await createdCompany.save();
	}

	async updateCompany(id: string, companyData: CompanyDto): Promise<Company> {
		let companyToUpdate;

		if (id && id.length === 32) {
			companyToUpdate = {
				isActive: companyData.isActive,
				company: companyData.company,
				logo: companyData.logo,
				industry: companyData.industry,
				about: companyData.about,
				projects: companyData.projects
			};

			try {
				return await this.companyModel.findByIdAndUpdate(id, companyToUpdate, {new: true}).exec();
			} catch {
				throw new NotFoundException();
			}
		} else {
			throw new HttpException({
				status: HttpStatus.FORBIDDEN,
				error: 'Bad company id.',
			}, 403);
		}
	}

	async removeCompany(id: string): Promise<Company> {
		if (id && id.length === 32) {
			try {
				return await this.companyModel.findByIdAndRemove(id).exec();
			} catch {
				throw new NotFoundException();
			}
		} else {
			throw new HttpException({
				status: HttpStatus.FORBIDDEN,
				error: 'Bad company id.',
			}, 403);
		}
	}
}
