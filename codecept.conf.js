require('dotenv').config();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://instagram.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'hashtag-doclersquad',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}