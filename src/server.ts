import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { ApiModule } from './api/api.module';

const PORT = process.env.PORT || 5000;

const vm = express();

vm.use(cors());
vm.use(morgan('tiny'));
vm.use(bodyParser.json());
vm.use(bodyParser.urlencoded({ extended: false }));

const bootstrap = async (instance) => {
	const module = await NestFactory.create(ApiModule, instance);

	module.listen(PORT);
};

bootstrap(vm);
