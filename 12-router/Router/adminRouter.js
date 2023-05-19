const express = require("express");
const router = express.Router();

router.route('/dashboard')
    .get((req, res) => {
        res.send("Admin Dashboard Page");
    })
    .post((req, res) => {
        res.send("Admin Dashboard Post Page");
    })

module.exports = router;