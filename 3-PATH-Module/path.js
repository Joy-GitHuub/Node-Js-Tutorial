// console.log(__dirname); __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file

/**
 *** PATH Module
 * __dirname 
 * __filename
 *  path.extname("package.json") => .json
 * path.dirname("") => F:/Node.JS-Folder/NODE JS/PATH-Module
 * path.basename("") => path.js
 * path.join("") => api\v1\user\user1
 * path.parse("") => return an object. {root name: "", dir name: "", base: "", ext:"", name: ""}
 * path.isAbsolute() => return boolean
 */

const path = require("path");

const extensionName = path.extname("package.json");

const dirname = path.dirname("F:/Node.JS-Folder/NODE JS/PATH-Module/path.js");

const basename = path.basename("F:/Node.JS-Folder/NODE JS/PATH-Module/path.js")

const join = path.join("/", "api", "v1", "user", "user1");
const join2 = path.join(__dirname + join);
const join3 = path.join(__dirname + "/../../" + join)

const parse = path.parse(__dirname);
const parse2 = path.parse("/users/admin/website/index.html");