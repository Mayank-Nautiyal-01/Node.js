
const path = require("path");

console.log(__dirname);      // Prints the absolute path of the directory where the current file resides
console.log(__filename);     // Prints the absolute path of the current file

// Create a relative path to: folder/students/data.txt
const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);       // Output: folder/students/data.txt

// Extract various parts of the path using path module methods
const parseData = path.parse(filePath);      // Returns an object with root, dir, base, ext, name
const resolvedPath = path.resolve(filePath); // Resolves to an absolute path from current working directory
const extname = path.extname(filePath);      // Returns the file extension (e.g., .txt)
const basename = path.basename(filePath);    // Returns the file name with extension (e.g., data.txt)
const dirname = path.dirname(filePath);      // Returns the directory part (e.g., folder/students)

console.log({parseData, resolvedPath, extname, basename, dirname});
