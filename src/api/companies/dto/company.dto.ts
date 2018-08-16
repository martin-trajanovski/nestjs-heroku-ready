export class CompanyDto {
	readonly _id: string;
	readonly isActive: boolean;
	readonly company: string;
	readonly logo: string;
	readonly industry: string;
	readonly about: string;
	readonly projects: Array<any>;
}
