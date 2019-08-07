
var chromedriver = require('chromedriver');

module.exports = {
  before: function (done) {
    console.log("STARTING CHROME DRIVER");
    try {
      chromedriver.start();
    } catch (e) {
      console.log("ERROR " + e);
    }

    done();
  },

  after: function (done) {
    chromedriver.stop();
    done();
  },

  "pageTimeOut": 10000,
  "waitForConditionTimeout": 10000
};  