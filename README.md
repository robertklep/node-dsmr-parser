# DSMR parser

Quick and dirty DSMR ([Dutch Smart Meter Requirements](http://www.netbeheernederland.nl/themas/dossier/documenten/?pageindex=3)) parser.

## Installation

```
$ npm i dsmr-parser
```

## Caveats

DSMR "telegrams" should have a CRLF line ending, and should end with a blank line. This is a requirement of the protocol, and the checksum calculation depends on it.

## Example

```
const parser   = require('dsmr-parser');
const telegram = parser.parse(`\
/KFM5KAIFA-METER\r
\r
1-3:0.2.8(42)\r
...
!8A3F\r
\r
`);

console.log( telegram.objects );
```
