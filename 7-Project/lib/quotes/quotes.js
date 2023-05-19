const fs = require('fs');

console.log();

const quotes = {};
quotes.allQuotes = function allQuotes() {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');
    const arrayOfQuotes = fileContents.split(/\r?\n/);
    return arrayOfQuotes;
};

module.exports = quotes;