#!/usr/bin/env node

/**
 modify mozilla/shield-studies-addon-template/package.json in place
 as part of `shield init`
*/

var jsonPath  = process.argv[2];
var dir = process.argv[3];

var p = require(jsonPath);

var oldName = 'shield-studies-addon-template';
const newName = dir.startsWith('shield-study-') ? dir : `shield-study-${dir}`;

p.version = '1.0.0';

p.author = 'Unknown';
p.name = newName;
p.license = 'MPL-2.0';
p.description = '<some feature> as a Shield Study';
p.homepage = p.homepage.replace(oldName, dir);

//
[ 'bugs',
  'repository'
].forEach( (k) => {
  p[k].url = p[k].url.replace(oldName, dir);
});

const fs = require('fs');
fs.writeFileSync(jsonPath, JSON.stringify(p, null, 2));

console.log('OK. Edited `%s` in place.  Took a guess at many what the fields should be.', jsonPath);

