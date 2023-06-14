const filePath = './groceries.csv';
const functions = require('./test')

// Data for addHeaders()
const headerData = ['name', 'qty', 'price'];

// Data for addItems()
const items = [
  { name: 'Bread', qty: 4, price: 20 },
  { name: 'Milk', qty: 2, price: 35 },
  { name: 'Butter', qty: 3, price: 250 },
];

// Calling the functions
const addHeadersResult = functions.addHeaders(filePath, headerData);
console.log('addHeaders result:', addHeadersResult);

const addItemsResult = functions.addItems(filePath, items);
console.log('addItems result:', addItemsResult);

console.log('Showing items:');
functions.showItems(filePath);
