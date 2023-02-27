const {Pool} = require("pg");
const configs = require("../enums/configs.enums");
const GradingDB = new Pool(configs.GRADING_DB_CONFIG);

GradingDB.query("SELECT NOW();", error => {
  if (error) console.log(`Connection error to our grading cloud server. [Issue]: ${error}`);
  else console.log(`[Database connection]: Connected correctly to the cloud server for ${appName}..`)
});

module.exports = {GradingDB};
