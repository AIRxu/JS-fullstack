// 类型
/* 
  1.number 数值型 整数 浮点数没有区分
  2.字符串类型
*/
let arr = [];
let nums = '631758924';
// console.log(typeof nums); //typeof 运算符
arr.push(nums[0]);
// 在第二个字符被截取之前存入c中
let c = nums[1];
nums = nums.substring(2); //slice
// 字符串拼接
nums += c;
// 循环
console.log(nums,arr);

// 1.第一位删除
// 2.第二位移动到最后