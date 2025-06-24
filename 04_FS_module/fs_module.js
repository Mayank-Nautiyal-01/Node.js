//File system module

const fs=require('fs')
const path=require('path')

const fileName='test.txt';

const filePath=path.join(__dirname,fileName);

//-------------------
//!write in file:



// console.log(__dirname);


// const writeFile= fs.writeFileSync(filePath,"This is the initial updated Data","utf8");

// console.log(writeFile);

//---------------------------
 
//! file read:

//method 1

// const readFile=fs.readFileSync(filePath,"utf-8");
// console.log(readFile.toString());


//method 2: good one
const readFile=fs.readFileSync(filePath,"utf-8");
console.log(readFile);

//=============

//! data append/updation:

const appendFile=fs.appendFileSync(
    filePath,
    "\n This is the new updated data",
    "utf-8"
);

console.log(appendFile);

//--------------------
// Delete file:

const fileDelete=fs.unlinkSync(filePath);
console.log(fileDelete);