exports.config = {
  tests: 'tests/*_test.js',
  output: 'evidence',
  helpers: {
    WebDriver: {
      url: 'http://zero.webappsecurity.com/index.html',
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Codeceptjs with Webdriver',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}
