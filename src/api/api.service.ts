import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
	root(): any {
		return 'Nestjs simple API for Angular-Firebase.';
	}
}
