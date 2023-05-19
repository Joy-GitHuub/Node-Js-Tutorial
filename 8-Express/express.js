const express = require("express");

const app = express();

// Get Data in Buffer
app.use(express.raw());
// Get Data in JSON
app.use(express.json());
// Get Data in text
app.use(express.text());


// Express use for Public Folder.
app.use(express.static(__dirname + "/public", {
    index: "test.txt"
}));

// Router
const router = express.Router({
    caseSensitive: true,
});
app.use(router);

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/index.html',);
})

router.get('/', (req, res) => {
    res.send("This is Home page")
});

router.post('/', (req, res) => {
    res.send("This is home page with post request");
});

app.listen(5000, () => {
    console.log(`listening on port ${5000}`);
});