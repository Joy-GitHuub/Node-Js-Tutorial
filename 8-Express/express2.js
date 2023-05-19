const express = require("express");

const app = express();


//  EJS use view engine set
app.set("view engine", "ejs")

app.get("/user/:userId", (req, res) => {
    console.log(req.userDetails);
    res.send("Get Your Single User");
});
// Middleware
app.param("userId", (req, res, next, id) => {
    const user = {
        userId: id,
        name: "Bangladesh",
    };
    req.userDetails = user;
    next();
});


//  App Route
app.route("/about")
    .get((req, res) => { res.send("Get") })
    .post((req, res) => { res.send("Post") })
    .put((req, res) => { res.send("Put") })
    .delete((req, res) => { res.send("Delete") })


app.route('/mypage')
    .get((req, res) => {
        res.render("pages/single")
    })



/*
app.all('*', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
*/

app.listen(5000, () => {
    console.log(`listening on port ${5000}`);
});