// 1. leetcode 是考试，程序员能通过他的考试，算法能力就没问题
// 函数是对一个功能进行封装

// var twoSum; //申明变量
// console.log(typeof twoSum); //undefined

// twoSum = 1;
// console.log(typeof twoSum);

// twoSum = null;
// console.log(typeof twoSum);

// twoSum = function(nums, target) {
//   // 函数体
//   let arr = []; //坐标放进去
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       // 内层循环，j不能和i相同 所以j=i+1
//       if(nums[i] +nums[j] === target) {
//         arr = [i,j];
//         return arr;
//       }
//     }
//   }
// }
// console.log(twoSum([2, 7, 11, 15],9))
// 时间复杂度 n*n = O(n^2) 
// console.log(typeof twoSum); //function

const twoSum = function(nums, target) {
  // 两重循环，
  // target 一重循环 nums[i] target - nums[i]
  let map = {};//对象字面量
  nums.forEach(function (e,i) {
    // console.log(e,i);
    map[e] = i;
  })
  // console.log(map[7]);
  for(let i = 0; i < nums.length; i++) {
    let j = map[target - nums[i]];
    if(j && j !== i) {
      return[i, j];
    }
  }
}
console.log(twoSum([2, 7, 11, 15],9));
// 时间复杂度 n + n = O(n)