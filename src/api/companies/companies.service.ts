import { Injectable, NotFoundException } from '@nestjs/common';

import { CompanyDto } from './company.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CompaniesService {
	private customers = [
		{
			_id: '8ae14023-4156-4af0-9d4c-11e7143389f9',
			isActive: false,
			company: 'MEDMEX',
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
			_id: '99569098-8495-4d09-aa08-0666e6410709',
			isActive: true,
			company: 'PLUTORQUE',
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
			_id: '87b9c27e-2b76-4e89-a302-0184e1fce5c0',
			isActive: true,
			company: 'IZZBY',
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
			_id: '3efb562f-65b6-4be4-b870-f9735d4249be',
			isActive: false,
			company: 'GREEKER',
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
			_id: 'f5904bd3-c752-4d44-b3d6-e54e087f87c3',
			isActive: true,
			company: 'ZAGGLES',
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
			_id: 'e11928de-59cc-466e-be94-91a44be5534b',
			isActive: true,
			company: 'MATRIXITY',
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
			_id: '82a67dbf-204b-4ff9-9964-6d1775ced714',
			isActive: false,
			company: 'EXOVENT',
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
			_id: '38756c7f-42e2-43f0-a20f-e35042e987db',
			isActive: false,
			company: 'EQUICOM',
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
			_id: '2327771d-7b75-4573-b220-25721fe79768',
			isActive: false,
			company: 'EARWAX',
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
			_id: '1ca69e1a-cf22-4f5a-926e-b5a98fce75f2',
			isActive: false,
			company: 'UPDAT',
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
			_id: '5959016c-d2c4-4864-ba86-9ae242fb2186',
			isActive: false,
			company: 'NETILITY',
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
			_id: '928e93c1-4015-4b90-9300-326d3a1efd19',
			isActive: true,
			company: 'DELPHIDE',
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
			_id: '2e6f41b0-5288-4059-b7c5-5618354bad51',
			isActive: true,
			company: 'XIIX',
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
			_id: 'bcfcd988-6d47-4c3c-8440-43e6afe55054',
			isActive: false,
			company: 'SUREPLEX',
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
			_id: '547d34d1-02cb-46ff-9086-97bb6650be71',
			isActive: true,
			company: 'NIMON',
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
			_id: 'f5906d34-5844-41f4-8170-6e23f32b6082',
			isActive: true,
			company: 'OVERFORK',
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
			_id: '4686a81f-80a1-4b1c-9a9c-050d242050f2',
			isActive: false,
			company: 'TROPOLIS',
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

		if (id && id.length === 36) {
			companyToReturn = this.customers.find(company => company._id === id);
		}

		if (companyToReturn) {
			return companyToReturn;
		} else {
			throw new NotFoundException();
		}
	}

	createCompany(newCompany: CompanyDto): CompanyDto {
		const id: string = uuid();

		const newCompanyToInsert = {
			_id: id,
			isActive: true,
			company: newCompany.company,
			industry: newCompany.industry,
			about: newCompany.about,
			projects: newCompany.projects
		};

		this.customers.push(newCompanyToInsert);

		return newCompanyToInsert;
	}

	updateCompany(id: string, companyData: CompanyDto): CompanyDto {
		let companyToUpdateIndex;

		if (id && id.length === 36) {
			companyToUpdateIndex = this.customers.findIndex(company => company._id === id);
		}

		if (companyToUpdateIndex) {
			this.customers[companyToUpdateIndex] = {
				_id: this.customers[companyToUpdateIndex]._id,
				isActive: companyData.isActive || this.customers[companyToUpdateIndex].isActive,
				company: companyData.company || this.customers[companyToUpdateIndex].company,
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

		if (id && id.length === 36) {
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
