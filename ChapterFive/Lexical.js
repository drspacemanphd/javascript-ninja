console.log(typeof fun === 'function');
console.log(typeof notFun === 'undefined');

var fun = 3;

console.log(typeof fun === 'number');
function fun() {}
console.log(typeof fun === 'number');

var notFun = 'help!';
console.log(typeof notFun === 'string');