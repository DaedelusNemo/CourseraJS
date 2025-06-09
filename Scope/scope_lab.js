// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
blockVar = "I was a blockscoped var but I changed";
blockLet = "I was a blocklet but I changed";
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
}

//blockVar = "I was a blockscoped var but I changed outside the block";
//blockLet = "I was a blocklet but I changed outside the block";
console.log(blockVar);
//console.log(blockLet);
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError