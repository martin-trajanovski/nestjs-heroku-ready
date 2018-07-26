switch (process.env.JEST_ENV) {
	case 'api':
		module.exports = {
			coveragePathIgnorePatterns: [
				'/node_modules/',
				'/tools/',
			],
			globals: {
				'ts-jest': {
					tsConfigFile: 'tsconfig.test.json',
				},
			},
			moduleFileExtensions: ['js', 'ts'],
			moduleNameMapper: {
				'~(.*)': '<rootDir>/src/api$1',
			},
			setupTestFrameworkScriptFile: '<rootDir>/tools/setup-api.ts',
			testPathIgnorePatterns: [
				'<rootDir>/node_modules/',
				'.*\\.e2e-spec.ts$',
			],
			testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
			transform: {
				'^.+\\.ts$': 'ts-jest',
			},
		};
		break;

	case 'e2e':
		module.exports = {
			coveragePathIgnorePatterns: [
				'/node_modules/',
				'/tools/',
			],
			globals: {
				'ts-jest': {
					tsConfigFile: 'tsconfig.test.json',
				},
			},
			moduleFileExtensions: ['js', 'ts', 'json'],
			setupTestFrameworkScriptFile: '<rootDir>/tools/setup-e2e.ts',
			testPathIgnorePatterns: [
				'<rootDir>/node_modules/',
				'.*\\.spec.ts$',
			],
			testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
			transform: {
				'^.+\\.ts$': 'ts-jest',
			},
		};
		break;

	default:
		module.exports = {};
}
