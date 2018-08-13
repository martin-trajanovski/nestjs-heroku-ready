import { Injectable, NotFoundException } from '@nestjs/common';
import * as crypto from 'crypto';

import { CompanyDto } from './company.dto';

@Injectable()
export class CompaniesService {
	private customers = [
		{
			_id: 'b73a66f7294b7224e629e9636469f7d0',
			isActive: false,
			company: 'MEDMEX',
			logo: '',
			industry: 'travel',
			about: `Duis esse deserunt duis esse labore in cillum pariatur. Id elit eiusmod adipisicing sunt amet cupidatat eiusmod.
					Do cillum ipsum proident aute ipsum non id pariatur quis ullamco mollit incididunt. Ipsum laborum voluptate irure adipisicing mollit enim magna.
					Fugiat excepteur occaecat minim anim cillum voluptate. Nulla elit officia culpa quis ex cupidatat est.`,
			projects: [
				{
					name: 'Washington-Quarex',
					enddate: 'Saturday, February 3, 2018 10:15 AM'
				},
				{
					name: 'Georgia-Aquoavo',
					enddate: 'Friday, December 12, 2014 11:12 AM'
				},
				{
					name: 'South Dakota-Cytrak',
					enddate: 'Sunday, July 27, 2014 10:00 AM'
				}
			]
		},
		{
			_id: '9df4d9e0f52797f05d97c819abc1211f',
			isActive: true,
			company: 'PLUTORQUE',
			logo: 'https://www.roleyfamilycentre.com.au/wp-content/uploads/2018/06/Switch-your-thinking-green-cleaning-image-358x286.jpg',
			industry: 'finance',
			about: `Ad tempor nisi sit veniam occaecat aliqua eiusmod ut quis elit. Nisi consectetur esse quis laboris dolor adipisicing mollit exercitation anim laborum nisi.
					Aliquip proident aliquip do aute laboris eiusmod laboris labore incididunt Lorem eiusmod velit eu velit. Fugiat sint fugiat dolore elit sunt cupidatat consectetur.
					Aute sunt quis voluptate ut irure aliquip sint eu ut. Occaecat enim nisi enim sit id quis reprehenderit ipsum et nisi. Elit excepteur do dolore exercitation.`,
			projects: [
				{
					name: 'Virgin Islands-Mantrix',
					enddate: 'Saturday, July 25, 2015 2:00 AM'
				},
				{
					name: 'South Carolina-Zolavo',
					enddate: 'Sunday, December 31, 2017 6:59 AM'
				},
				{
					name: 'Indiana-Waab',
					enddate: 'Thursday, February 1, 2018 10:46 AM'
				}
			]
		},
		{
			_id: '9661bb1c1d65ea4caa8832e9696ec3f3',
			isActive: true,
			company: 'IZZBY',
			logo: '',
			industry: 'finance',
			about: `Et sunt deserunt id magna tempor consectetur fugiat duis ea occaecat proident nulla. Occaecat sit eiusmod ullamco in commodo Lorem anim dolor do ex cupidatat amet occaecat do. Occaecat consequat culpa
					esse et occaecat non sint nostrud et pariatur. Quis reprehenderit elit sit laboris adipisicing eu reprehenderit aute nisi sint veniam sit eiusmod. Culpa anim incididunt elit esse commodo incididunt.
					Nostrud exercitation Lorem aliqua officia. Proident labore laborum elit velit irure ut cillum mollit occaecat aute pariatur tempor.`,
			projects: [
				{
					name: 'Wisconsin-Dyno',
					enddate: 'Friday, November 27, 2015 8:34 PM'
				},
				{
					name: 'New York-Flum',
					enddate: 'Friday, January 17, 2014 3:13 AM'
				},
				{
					name: 'New Mexico-Cogentry',
					enddate: 'Sunday, October 26, 2014 6:24 AM'
				}
			]
		},
		{
			_id: 'ac5bd68fefb3dc27808aaba3314c2736',
			isActive: false,
			company: 'GREEKER',
			logo: '',
			industry: 'travel',
			about: `Consectetur ex pariatur incididunt sint occaecat dolore duis. Sunt irure voluptate sunt est exercitation ea veniam. Eiusmod magna quis laboris dolor.
				Culpa irure voluptate in qui cupidatat elit pariatur fugiat. Eiusmod adipisicing eiusmod Lorem anim esse quis duis.`,
			projects: [
				{
					name: 'Kansas-Portaline',
					enddate: 'Monday, July 21, 2014 10:05 PM'
				},
				{
					name: 'Minnesota-Genmex',
					enddate: 'Tuesday, March 15, 2016 12:39 PM'
				},
				{
					name: 'Michigan-Egypto',
					enddate: 'Friday, May 27, 2016 8:23 PM'
				}
			]
		},
		{
			_id: '146384bcfe8228c421ef33a4601b09d3',
			isActive: true,
			company: 'ZAGGLES',
			logo: '',
			industry: 'finance',
			about: `Nisi excepteur sit dolor anim anim mollit cillum quis occaecat sit. Nulla non culpa eu voluptate labore aliqua excepteur fugiat.
					Ipsum voluptate Lorem nulla irure ex duis eu minim ullamco sint. Voluptate nisi ad sint proident minim.
					Qui laborum ullamco proident ullamco dolore do reprehenderit in eiusmod commodo nulla ipsum. Deserunt veniam deserunt consectetur cupidatat tempor commodo dolor cillum excepteur in ea minim. Culpa qui magna in quis elit qui.`,
			projects: [
				{
					name: 'West Virginia-Puria',
					enddate: 'Monday, February 26, 2018 3:00 PM'
				},
				{
					name: 'Utah-Amtas',
					enddate: 'Friday, June 15, 2018 12:23 AM'
				},
				{
					name: 'California-Bezal',
					enddate: 'Tuesday, February 4, 2014 2:23 PM'
				}
			]
		},
		{
			_id: '5e559b63dbf12b54d6430c9ecf18de05',
			isActive: true,
			company: 'MATRIXITY',
			logo: '',
			industry: 'travel',
			about: `Ex pariatur adipisicing id id dolore fugiat est laboris in exercitation non cillum exercitation deserunt. Exercitation laborum ex irure est occaecat.
				Excepteur id ipsum veniam ipsum anim laborum exercitation pariatur cillum deserunt velit esse. Commodo consectetur cillum velit exercitation incididunt mollit amet deserunt.`,
			projects: [
				{
					name: 'Nevada-Zolarity',
					enddate: 'Monday, February 22, 2016 7:12 AM'
				},
				{
					name: 'Hawaii-Fiberox',
					enddate: 'Tuesday, June 10, 2014 11:18 AM'
				},
				{
					name: 'Delaware-Proxsoft',
					enddate: 'Saturday, December 6, 2014 3:56 AM'
				}
			]
		},
		{
			_id: '6d3160e928464dc0b75aa4d061f434ee',
			isActive: false,
			company: 'EXOVENT',
			logo: '',
			industry: 'travel',
			about: `Cillum ipsum est elit ea aliquip ad ex. Est non fugiat quis reprehenderit quis aliqua consequat cupidatat aliquip eu excepteur nostrud.
					Eu occaecat consectetur elit dolore proident. Ut id in enim ut enim dolore enim ut amet et. Nostrud sint voluptate elit minim occaecat commodo.`,
			projects: [
				{
					name: 'Missouri-Digirang',
					enddate: 'Sunday, September 17, 2017 3:14 PM'
				},
				{
					name: 'Palau-Indexia',
					enddate: 'Sunday, September 3, 2017 6:42 AM'
				},
				{
					name: 'Florida-Amril',
					enddate: 'Tuesday, September 2, 2014 10:39 PM'
				}
			]
		},
		{
			_id: 'c139b60885059b8459b756adbdbd9ac2',
			isActive: false,
			company: 'EQUICOM',
			logo: '',
			industry: 'travel',
			about: 'Dolor aute aute eiusmod dolor sunt nulla et et aliquip ullamco. Eu in esse qui id fugiat consequat officia fugiat aute nisi deserunt velit irure. Laborum quis mollit tempor nisi laborum sunt do dolor veniam consequat qui aliquip et.',
			projects: [
				{
					name: 'North Dakota-Quilk',
					enddate: 'Thursday, September 11, 2014 6:21 AM'
				},
				{
					name: 'Iowa-Vendblend',
					enddate: 'Monday, January 15, 2018 9:39 PM'
				},
				{
					name: 'Virginia-Niquent',
					enddate: 'Sunday, May 18, 2014 7:49 PM'
				}
			]
		},
		{
			_id: 'a20db7bbfa636705786fc65a22e9764e',
			isActive: false,
			company: 'EARWAX',
			logo: '',
			industry: 'finance',
			about: 'Veniam ullamco labore voluptate aute est elit amet. Irure id excepteur sint quis do ut aliqua esse incididunt tempor laboris. Officia consectetur aliqua exercitation cillum sunt officia culpa dolor eiusmod irure anim reprehenderit.',
			projects: [
				{
					name: 'Guam-Zerology',
					enddate: 'Saturday, March 17, 2018 10:14 PM'
				},
				{
					name: 'Pennsylvania-Centree',
					enddate: 'Friday, February 19, 2016 7:49 PM'
				},
				{
					name: 'Northern Mariana Islands-Columella',
					enddate: 'Sunday, April 19, 2015 3:14 PM'
				}
			]
		},
		{
			_id: '40b6d4b0ef62c66323c48aee9c3edb90',
			isActive: false,
			company: 'UPDAT',
			logo: '',
			industry: 'insurance',
			about: `Velit aliqua consequat pariatur elit velit culpa ex aliquip eiusmod exercitation. Nostrud non nisi sit cupidatat velit excepteur pariatur qui excepteur nisi sint reprehenderit.
					Quis tempor id laborum aliquip. Cupidatat deserunt exercitation est velit enim culpa et Lorem duis voluptate. Cupidatat aliquip culpa commodo elit eiusmod occaecat nulla.
					Officia reprehenderit eiusmod veniam fugiat ad culpa aliquip aliqua exercitation magna officia consectetur. Ipsum nulla ullamco reprehenderit aute minim commodo et dolore proident irure proident.`,
			projects: [
				{
					name: 'Kentucky-Entality',
					enddate: 'Friday, June 3, 2016 10:13 AM'
				},
				{
					name: 'Mississippi-Comveyer',
					enddate: 'Thursday, April 20, 2017 6:36 AM'
				},
				{
					name: 'North Carolina-Newcube',
					enddate: 'Tuesday, January 19, 2016 7:08 PM'
				}
			]
		},
		{
			_id: '840fbc3544aad199f221e47c28ad936b',
			isActive: false,
			company: 'NETILITY',
			logo: '',
			industry: 'finance',
			about: 'Laborum ex non qui aute cillum Lorem exercitation ad et quis dolore. Duis id nulla ex tempor irure nostrud cupidatat anim cupidatat dolor duis. Ad nostrud incididunt esse fugiat ullamco.',
			projects: [
				{
					name: 'Maryland-Ziore',
					enddate: 'Monday, August 21, 2017 11:44 PM'
				},
				{
					name: 'Texas-Kineticut',
					enddate: 'Thursday, July 13, 2017 7:22 PM'
				},
				{
					name: 'Oklahoma-Tubesys',
					enddate: 'Friday, September 18, 2015 5:33 AM'
				}
			]
		},
		{
			_id: '33f81f179f410fb8ec3ccc257338d30e',
			isActive: true,
			company: 'DELPHIDE',
			logo: '',
			industry: 'insurance',
			about: `Eiusmod elit ad occaecat eiusmod aliquip anim Lorem. Mollit aliqua aute minim do sunt nulla sunt nisi Lorem ullamco. Exercitation pariatur tempor consectetur laboris nisi sit qui excepteur pariatur.
					Ad non minim laborum ut in esse sint officia est deserunt et nostrud. Veniam cillum pariatur anim ea elit laborum qui est nulla voluptate quis.
					Quis incididunt tempor nostrud pariatur commodo veniam aliqua id deserunt cillum Lorem magna exercitation consequat.`,
			projects: [
				{
					name: 'Montana-Quintity',
					enddate: 'Monday, August 14, 2017 6:34 PM'
				},
				{
					name: 'Puerto Rico-Earthwax',
					enddate: 'Monday, July 3, 2017 9:11 PM'
				},
				{
					name: 'Maine-Eclipto',
					enddate: 'Friday, June 1, 2018 4:01 PM'
				}
			]
		},
		{
			_id: '4e87dc97f3168080b6d7d333e1ffcc00',
			isActive: true,
			company: 'XIIX',
			logo: '',
			industry: 'travel',
			about: `Quis exercitation adipisicing officia est commodo minim do consectetur officia adipisicing proident mollit Lorem. Irure minim labore dolor eiusmod veniam quis.
					Eu ipsum et non eu excepteur fugiat culpa ipsum est mollit adipisicing. Laborum exercitation dolor consectetur pariatur eiusmod ea velit quis exercitation adipisicing anim duis aliqua.
					Lorem occaecat cupidatat aute ex officia ea. Eu dolore sint sunt veniam duis ut magna labore in ex elit eiusmod commodo.`,
			projects: [
				{
					name: 'Connecticut-Endipine',
					enddate: 'Thursday, March 17, 2016 6:37 PM'
				},
				{
					name: 'New Hampshire-Schoolio',
					enddate: 'Thursday, April 17, 2014 1:09 AM'
				},
				{
					name: 'Arkansas-Sensate',
					enddate: 'Wednesday, August 24, 2016 11:53 PM'
				}
			]
		},
		{
			_id: '2726dd20f17e200d679a5134482a9a9a',
			isActive: false,
			company: 'SUREPLEX',
			logo: '',
			industry: 'travel',
			about: 'Qui consequat consectetur elit est nostrud ea fugiat officia ad. Proident mollit dolore exercitation quis sit. Id enim voluptate officia ut velit velit dolore adipisicing sint.',
			projects: [
				{
					name: 'Nebraska-Medcom',
					enddate: 'Sunday, April 22, 2018 1:28 PM'
				},
				{
					name: 'Oregon-Zanity',
					enddate: 'Wednesday, March 9, 2016 12:46 PM'
				},
				{
					name: 'District Of Columbia-Cemention',
					enddate: 'Wednesday, November 16, 2016 6:23 AM'
				}
			]
		},
		{
			_id: '34b8e95a03088459a460b85467d9f2f9',
			isActive: true,
			company: 'NIMON',
			logo: '',
			industry: 'travel',
			about: `Ex labore enim quis cillum culpa cillum magna dolor laboris laboris eiusmod aute. Consectetur ullamco tempor dolore veniam aliquip fugiat officia sit amet.
					Eu quis aute proident aute exercitation excepteur minim occaecat ea nisi. Occaecat exercitation est aliquip consectetur ex irure et dolore irure pariatur.`,
			projects: [
				{
					name: 'New Jersey-Comfirm',
					enddate: 'Saturday, March 25, 2017 8:29 AM'
				},
				{
					name: 'Idaho-Apexia',
					enddate: 'Thursday, December 4, 2014 10:52 PM'
				},
				{
					name: 'Federated States Of Micronesia-Intrawear',
					enddate: 'Wednesday, May 4, 2016 12:33 PM'
				}
			]
		},
		{
			_id: '5d35a476e8bbb02194019d989a1fda00',
			isActive: true,
			company: 'OVERFORK',
			logo: '',
			industry: 'insurance',
			about: `Laboris nisi qui in dolor sunt. Non reprehenderit occaecat et ea irure consequat quis occaecat non ad. Proident dolore officia non deserunt ut aute duis.
					Cillum irure qui sint quis sunt id consectetur dolor. Irure ex ullamco sunt fugiat irure ex quis.`,
			projects: [
				{
					name: 'Wyoming-Zilladyne',
					enddate: 'Thursday, March 23, 2017 12:47 AM'
				},
				{
					name: 'Alabama-Calcu',
					enddate: 'Tuesday, April 19, 2016 3:07 AM'
				},
				{
					name: 'Vermont-Comverges',
					enddate: 'Friday, October 7, 2016 10:22 AM'
				}
			]
		},
		{
			_id: 'e02ad1cdbf92d4a6dbadb30e73b667f1',
			isActive: false,
			company: 'TROPOLIS',
			logo: '',
			industry: 'finance',
			about: `Mollit aliquip sint consectetur mollit deserunt exercitation ea aute in reprehenderit dolore deserunt id mollit. Qui aliqua officia ad non proident nostrud Lorem irure ut laborum.
					Nostrud amet velit veniam nisi Lorem quis. Nostrud culpa minim esse ut sint non duis adipisicing irure.`,
			projects: [
				{
					name: 'Tennessee-Darwinium',
					enddate: 'Tuesday, May 3, 2016 9:14 AM'
				},
				{
					name: 'Marshall Islands-Snips',
					enddate: 'Friday, April 1, 2016 5:58 PM'
				},
				{
					name: 'Colorado-Joviold',
					enddate: 'Sunday, February 15, 2015 11:19 PM'
				}
			]
		}
	];

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
