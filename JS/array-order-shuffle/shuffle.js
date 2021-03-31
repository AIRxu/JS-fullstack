// 洗牌算法
// 总后往前，每次都在未交换的所有数内随机找一个数和最后一个交换
// 交换完成之后就向前再重复上一步
// 直到所有数都完成交换
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // Math.floor 是向下取整
    let idx = Math.floor(Math.random() * (len - i));
    [arr[len-i-1], arr[idx]] = [arr[idx], arr[len-i-1]] 
  }
  return arr;
}
let arr2 = [5, 3, 7, 4, 9, 1];
let a = shuffle(arr2);
console.log(a);