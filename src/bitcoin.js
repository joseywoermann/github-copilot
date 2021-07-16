// get the current bitcoin price
var bitcoin = require("bitcoinjs-lib");
var client = bitcoin.createClient({
    host: "127.0.0.1:3000",
    user: "user",
    password: "password",
});
