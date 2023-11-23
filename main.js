let name = 'Kate';
const age = 20;
let logic = true; // false

let apple = {
  color: "red",
  size: "large",
  type: "golden",
  year: 1998
}
let apple2 = apple; 
let applesize = apple.size;  
apple2.size = "small" 
console.log('- > apple =', apple.size);

let fruits = [ 'apple', 'orange', 'pear','grape', 123]

 
console.log('-> fruits =', fruits); 
console.log('-> fruits 1 =', fruits[0]);
console.log('-> fruits.length', fruits.length);

for (let index = 0; index < fruits.length; index++) {
  outputfruitsindocument("you have fruits: ", index);
}

function outputfruitsindocument(prefix, index) { 
   const fruit = fruits[index];
   const text = prefix + fruit; 
  console.log( text); 
  const node = document.createElement('div'); 
  node.innerText = text; 
  document.body.appendChild(node);
}

console.log(node)