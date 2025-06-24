📁 Node.js File System Module (Sync) - Example
This project demonstrates how to use Node.js fs module with synchronous methods for basic file operations:

Write to a file

Read a file

Append to a file

Delete a file

📦 Modules Used
fs: Node.js File System module.

path: To construct file paths in a cross-platform way.

🔧 Operations Explained
1. Write to a File

fs.writeFileSync(filePath, "This is the initial updated Data", "utf8");
Writes the given data to test.txt. Overwrites file if it exists.

2. Read a File

const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);
Reads the content of test.txt synchronously and prints it.

3. Append Data to File

fs.appendFileSync(filePath, "\n This is the new updated data", "utf-8");
Appends data to the file without overwriting existing content.

4. Delete File

fs.unlinkSync(filePath);
Deletes the test.txt file.

🚀 How to Run
Make sure Node.js is installed, then run:

node index.js
Note: You may want to comment/uncomment lines depending on the operation you want to test.

📁 Folder Structure

project-root/
│
├── index.js        # Main script
├── test.txt        # Text file (created/used by script)