const testRunner = require('vscode/lib/testrunner')

const options = {
  ui: 'tdd',
  useColors: true
}

if (process.env.NODE_ENV === 'coverage') {
  options.reporter = 'mocha-istanbul'
}

testRunner.configure(options)

module.exports = testRunner
