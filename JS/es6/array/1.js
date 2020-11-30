const ages = [32, 15, 19, 12];

// let arr1 = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] > 18) {
//     arr1.push(ages[i])
//   }
// }
// console.log(arr1)

// 命名
// ages 数组 filter 语义化的表达 过滤
// 1. 计数 for 机械化
// 2. 表述性好一些 forEach 函数式编程 提升代码可读性

  // console.log(age,index,o);
// const adultArr = ages.filter(age => age >= 18);

// 有没有大于18岁的元素，有则true
const adultPresent = ages.some(age => age >= 18)
console.log(adultPresent);
// 过滤出所有>= 18的元素
const adultArr = ages.filter(age => age >= 18);
console.log(adultArr);

// 所有人满足需求？
const allOldEnough = ages.every(age => age >= 18)
console.log(allOldEnough);