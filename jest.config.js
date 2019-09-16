var path = require("path");
module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, "test/setupTests.js")]
};
