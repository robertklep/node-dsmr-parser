const parser   = require('./index');
const telegram = require('fs').readFileSync('example-telegram.txt', 'utf-8');

console.log(parser.parse(telegram).objects);

console.log("-------------");

console.log(parser.parse(telegram, parser.ParseTypes.NumericIDs).objects);

console.log("-------------");

console.log(parser.parse(telegram, parser.ParseTypes.TextBased | parser.ParseTypes.NumericIDs).objects);
