const fileName = 'iris.csv'
const filePath = require('path').resolve(__dirname, fileName)

module.exports = {
  'Upload iris': client => {
    client
      .url('localhost:8080')
      .waitForElementPresent('input#file', 5000)
      .setValue('input#file', filePath)
      .end()
  }
}
