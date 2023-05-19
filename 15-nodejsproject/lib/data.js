const fs = require("fs");
const path = require("path");

// module scaffolding.
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// Write data to file 
lib.create = function (dir, file, data, cb) {
    // open file for writeing
    fs.open(`${lib.basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);
            // Write Data to file and the close it
            fs.writeFile(fileDescriptor, stringData, (err) => {
                if (!err) {
                    fs.close(fileDescriptor, function (error) {
                        if (!error) {
                            cb(false);
                        } else {
                            cb("Errror Closing the new file!");
                        }
                    });
                } else {
                    cb("Error writing to new file!");
                }
            })
        } else {
            cb("There was an error, file my already existes");
        }
    });
};

// Read data to File
lib.read = function (dir, file, cb) {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (err, data) => {
        cb(err, data);
    })
};

// Update existing file
lib.update = function (dir, file, data, cb) {
    // file open for writeing
    fs.open(`${lib.basedir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // Convert the data to string
            const stringData = JSON.stringify(data);
            console.log(fileDescriptor);
            fs.ftruncate(fileDescriptor, (err) => {
                if (!err) {
                    fs.writeFile(fileDescriptor, stringData, (err) => {
                        if (!err) {
                            fs.close(fileDescriptor, (err) => {
                                if (!err) {
                                    cb(false);
                                } else {
                                    cb("Error closing file!");
                                }
                            })
                        } else {
                            cb(`Error writing to file!`);
                        }
                    })
                } else {
                    cb(`Error truncateing file!`);
                }
            })
        } else {
            cb(`Error Updating. File may not exist!`);
        }
    })
};

// Delete existing file
lib.delete = function (dir, file, cb) {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            cb(false);
        } else {
            cb("Error Deleting file!");
        }
    })
}

module.exports = lib;