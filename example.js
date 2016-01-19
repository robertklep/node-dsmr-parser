const parser   = require('./index');
const telegram = require('fs').readFileSync('example-telegram.txt', 'utf-8');

console.log( parser.parse(telegram).objects);
