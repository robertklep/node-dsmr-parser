const parser   = require('./index');
const telegram = require('fs').readFileSync('example-telegram.txt', 'utf-8');

console.log("default parsing method (text-based fields), no units:");
console.log(parser.parse(telegram).objects);
console.log("-------------");

console.log("ID-based parsing method, no units:");
console.log(parser.parse(telegram, parser.ParseTypes.NumericIDs).objects);
console.log("-------------");

console.log("Text-based and ID-based parsing method, no units:");
console.log(parser.parse(telegram, parser.ParseTypes.TextBased | parser.ParseTypes.NumericIDs).objects);
console.log("-------------");

console.log("Text-based and ID-based parsing method, with units:");
console.log(parser.parse(telegram, parser.ParseTypes.TextBased | parser.ParseTypes.NumericIDs | parser.ParseTypes.ReadUnits).objects);
console.log("-------------");
