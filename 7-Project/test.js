const mathLibrary = require("./lib/meth");
const quotesLibrary = require("./lib/quotes/quotes");

const app = {};
let count = 0;

app.config = {
    timeBetweenQuotes: 1500,
};


/**
 * 
 * @param {allQuote} Array
 */
app.printQuote = function printQuote() {
    const allQuote = quotesLibrary.allQuotes();
    const numberOfQuotes = allQuote.length;
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);
    const selectedQuote = allQuote[randomNumber - 1];
    console.log(`${count++} ${selectedQuote}`);
};

app.indefiniteLoop = function indefiniteLoop() {
    // setInterval(app.printQuote, app.config.timeBetweenQuotes);
    setInterval(() => {
        app.printQuote();
    }, app.config.timeBetweenQuotes);
};
app.indefiniteLoop();