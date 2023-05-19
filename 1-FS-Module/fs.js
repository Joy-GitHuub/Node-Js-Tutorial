//  Fs Module***
/**
 ** FS MODULE
 * writeFile() *
 * writeFileSync()
 * appendFile() *
 * appendFileSync()
 * readFile() * read file
 * readFileSync()
 * Unlink() * deleted file
 * UnlinkSync()
 * Exists() *
 * ExistsSync() 
 * rename() * rename your file name
 * rmdir() * deleted folder
 * readdir() * folder all files name get in a array.
 */

const fs = require("fs");

const data = 'This is my Second Data.'
fs.writeFile("demo.txt", data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`SuccessFully write file.`);
    };
});

fs.appendFile("demo.txt", " This is Append Data", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`SuccessFully append data.`);
    };
});

fs.readFile("demo.txt", (error, data,) => {
    if (error) {
        console.log(error);
    } else {
        const decoded = data.toString();
        console.log(decoded);
    };
});

fs.rename("demo.txt", "new.txt", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`SuccessFully Update file name.`);
    };
});

fs.unlink("data.txt", (error) => {
    if (error) {
        console.log(`Not Delete`);
    } else {
        console.log(`SuccessFully Deleted`);
    }
});

fs.rmdir("public", ({ recursive: true }), (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("SuccessFully Deleted Folder");
    }
})

fs.readdir("demo", (error, files) => {
    console.log(files)
})


const create = fs.writeFileSync("demo2.txt", data,);
const append = fs.appendFileSync("demo2.txt", " Data append in file");
const rename = fs.renameSync("demo2.txt", "new2.txt");
const deleteFile = fs.unlinkSync("demo.txt");