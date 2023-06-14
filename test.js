


// // only fs module isme syncronouse way chalta if hum isme bhi asyncronouse way cahiye to hame callback api use krna ho mene example diya
// const fss = require('fs')

// fss.readFile('./file.text','utf8',  (err, data)=>{

//     if(err)
//     {
//     console.log(err);

//     }
//     else{
//     console.log(data);

//     }
// })





// // for promises node give us fs/promises module jiske pass bhi same methods hai fs ki tarh okk

// const fs = require('fs/promises')
// fs.readFile('./file.text', { encoding: 'utf8' })
// .then(ress=>{

//     console.log(ress);
// })
// .catch(err =>{
//     console.log(err);

// })



// fs.open('./file.text').then(async(res)=>{

//     for await (const line of res.readLines()) {

//         console.log(line);
//     }
// })



// Project 1

// was containing 3 function 1. addHeaders(), 2. addItems(), 3. showItems()
// 1. addHeaders(): This function should accept a file path and an array 
//    containing “name”,”qty” and “price” as argument and should write it
//    in the file. It should return true if operation was successful otherwise false

// 2.addItems(): This function should accept the same file path as before and
//   an array of objects as shown below and should save these objects in the file.
//   It should return true if operation was successful otherwise false.


//  let items = [
//     		{ name: "Bread", qty: 4, price: 20 },
//     		{ name: "Milk", qty: 2, price: 35 },
//     		{ name: "Butter", qty: 3, price: 250 },
//     	      ];

// 3.showtems(): This function should accept the same file path as before and should read and display the file data.

// Finally from the main script call these functions in the proper order . The file path to be passed is “./text_files/groceries.csv”

// const { response } = require('express');
// var fs = require('fs');

// function addHeaders(path, data) {
//     const headers = ['name', 'qty', 'price'].join(',');
//     const content = headers + '\n' + data.join(',');
//     fs.open('./text_files/groceries.csv', 'r', function (err, file) {
//         if (err){
//             console.log('err!',err);
//         }
        
//         else{
//             fs.writeFile(path,content,'utf-8',(err, res)=>{
//                 if(err){
//                     return false

//                 }
//                 else{
//                     return true
//                 }

//             })
//         }
//     });
// }

// function addItems(path, data){

//     fs.open('./text_files/groceries.csv', 'r', function (err, file) {
//         if (err){
//             console.log('err!',err);
//         }
//         else{
//             fs.appendFile(path,data,'a+',(err, res)=>{
//                 if(err){
//                     return false

//                 }
//                 else{
//                     return true
//                 }

//             })
//         }
//     });
// }
// function showtems(path){
//     fs.readFile(path,(err, response)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(response.toString())
//         }
//     })

// }

// module.exports={

//     addHeaders,
//     addItems,
//     showtems
// }



const fs = require('fs');

function addHeaders(path, data) {
  const headers = ['name', 'qty', 'price'].join(',');
  const content = headers + '\n' + data.join(',');

  try {
    fs.writeFileSync(path, content, 'utf-8');
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function addItems(path, items) {
  const content = items
    .map(item => Object.values(item).join(','))
    .join('\n');

  try {
    fs.appendFileSync(path, '\n' + content, 'utf-8');
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function showItems(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  addHeaders,
  addItems,
  showItems
};





