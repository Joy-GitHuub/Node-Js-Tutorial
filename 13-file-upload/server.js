const path = require("path");
const express = require("express");
const multer = require("multer");
const server = express();

/**
 ** All Steps--------
 * 1. multer install
 * 2. multer require
 * 3. multer set a variable
 * 4. open a upload folder 
 * 5. dest set folder url
 * 6. call upload.single() middleware.
 * 7. single("avatar") basic parameter accept file name. 
 * 8. upload multiple file in one time this time use upload.array()
 * 9. array("avatar", 3) array methods accpte 2 parameters 1. filename 2. how many file upload.
 * Multiple file upload in one time use upload.fields([])
 * fields([{name: "avatar", maxCount: 1}, {name: "gallery", maxCount:2},])
 * upload.none() use for normal form data get in client.
 * limits: {fileSize: 1000000} this is a limits client upload this size is file.
 * which type file accepte in my back end this time use fileFilter and this is accepte a function.
 */


const UPLOADS_FOLDER = "./upload/"

//  define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "")
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    },
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000, //1MB
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === "avatar") {
            if (file.mimetype === "image/png" || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
                cb(null, true);
            } else {
                cb(new Error("Only .jpg, .png, .jpeg format allowed!"));
            }
        }
        else if (file.fieldname === "doc") {
            console.log(`Call`);
            cb(null, true);
        }
    }
});


server.post("/", upload.fields([
    { name: "avatar", maxCount: 2 },
    { name: "doc", maxCount: 1 },
]), (req, res) => {
    res.send("Hello World");
});

server.use((error, req, res, next) => {
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send("Succcess");
    }
});

server.listen(3000, () => {
    console.log(`Server is running.......`);
});