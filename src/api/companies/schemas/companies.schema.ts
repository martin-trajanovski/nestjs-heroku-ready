import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
	_id: String,
	isActive: Boolean,
	company: String,
	logo: String,
	industry: String,
	about: String,
	projects: Array
});
