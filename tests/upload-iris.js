const fileName = 'iris.csv'
const filePath = require('path').resolve(__dirname, fileName)

module.exports = {
  'Upload iris': client => {
    client
      .url('https://choyongjoon.github.io/nightwatch-upload-example/')
      .waitForElementPresent('input#file', 5000)
      .setValue('input#file', filePath)
      .waitForElementPresent('#file-size', 5000)
      .assert.containsText('#file-size', '0') // 4630
      .end()
  }
}
