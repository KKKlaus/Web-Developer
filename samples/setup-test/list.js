const path = require('path');

const people = `
Name           |  NEUID   | github ID
Brett Ritter   | ???      | swiftone
Zihao Lin      | 001407559| KKKlaus
`.split('\n').filter( truthy => truthy );

if (require.main === module) {
  // Run if we are being run directly

  // Confirm the PATH setup

  const pathOk = process.env.PATH.includes( path.dirname('./node_modules/.bin') );
  console.log(`PATH is ${ pathOk ? 'looking good' : 'NOT OKAY!!1!eleven!' }\n`);

  if( pathOk ) {
    // List the people
    for ( person of people ) {
      console.log(person);
    }
  }
}

module.exports = people;
