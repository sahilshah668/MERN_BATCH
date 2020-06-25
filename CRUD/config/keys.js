const username = require("./appConfig").username;
const password = require("./appConfig").password;
const dbName = require("./appConfig").dbName;

module.exports = mongoDbUri = `mongodb+srv://${username}:${password}@cluster0-x2sve.mongodb.net/${dbName}?retryWrites=true&w=majority`;
