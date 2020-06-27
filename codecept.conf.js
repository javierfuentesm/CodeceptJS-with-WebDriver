exports.config = {
	output: 'evidence',
	helpers: {
		WebDriver: {
			url: 'http://zero.webappsecurity.com/index.html',
			browser: 'chrome',
		},
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage.js',
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*.feature',
		steps: ['./step_definitions/login_steps.js'],
	},
	plugins: {
		screenshotOnFail: {
			enabled: true,
		},
		retryFailedStep: {
			enabled: true,
		},
		allure: {},
		wdio: {
			enabled: true,
			services: ['selenium-standalone'],
		},
	},
	tests: 'tests/*_test.js',
	name: 'Codeceptjs with Webdriver',
}
