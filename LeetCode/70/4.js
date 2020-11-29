var m = new Map();
m.set(2, 'black');
m.set(3, 'red');
m.set(4, 'blue');
// console.log(m.get(2));
// console.log(m.has(2));
m.set({x:1}, 3);
let i = 1;
m.forEach((item, key, mapObj) =>{
  console.log(item, key, mapObj);
  i++;
})
console.log(i);