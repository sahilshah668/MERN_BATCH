const username = require("./appConfig").username;
const password = require("./appConfig").password;
const dbName = require("./appConfig").dbName;

module.exports = {
    googleClientID:'960101098296-6fqipkn7c0ebq06bo33rus1rioe3qmb7.apps.googleusercontent.com',
    googleClientSecret:'2IkOkIHpFdqfMwlgwK7cGCqe',
    mongoURI:`mongodb+srv://${username}:${password}@cluster0-x2sve.mongodb.net/${dbName}?retryWrites=true&w=majority`
}