let a = 1;
let b = 1;
let c = [1];  // 北京路
let d = [1];  // 北京路 不是同一个地方的北京路所以不相等
let e = '1';
let f = {};
let g = {};

console.log(a == b);
// 两个等号会进行类型转换再判断， 三个等号不会转直接判断
console.log(a == e, a === e);

console.log(c == d); //??
console.log(f == g); //?? 
// 不相等的原因：存储 引用 类型的时候会存在不同的地址
// c d  f g 指向不同的地址
// 地址不同，导致 == 和 === 都不成立


