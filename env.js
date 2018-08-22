function Environments() {
	this.NODE_ENV = process.env.NODE_ENV || 'development';

	this.PROJECT_NAME = process.env.PROJECT_NAME || 'nestjs-heroku-ready';

	this.HOST_NAME = process.env.HOST_NAME || 'localhost';

	this.API_PORT = process.env.API_PORT || 5000;
	this.API_URL = process.env.API_URL || `http://${this.HOST_NAME}:${this.API_PORT}`;

	this.MONGODB_CONFIG = process.env.MONGODB_CONFIG || {
		apiKey: process.env.MONGODB_API_KEY || '<API_KEY>',
		databaseURL: process.env.MONGODB_DATABASE_URL || 'mongodb://angular-nestjs-db-user2:angularnestuser2@ds123372.mlab.com:23372/angular-nestjs-db'
	};

	this.GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS || '<GOOGLE_ANALYTICS>';

	this.SENTRY_DSN = process.env.SENTRY_DSN || null;
	this.RENDERTRON_URL = process.env.RENDERTRON_URL || null;
}

module.exports = new Environments();
