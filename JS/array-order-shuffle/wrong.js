let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5)
}
let t = 1000;
for(let i = 0; i < t; i++) {
  // 此时为了乱序传入的不是被改变后的arr，我们给它传递浅拷贝的数组
  let sorted = shuffle(arr.slice(0));
  for (let i = 0; i < sorted.length; i++) {
    res[i] = res[i] + sorted[i];
  }
}
console.log(res.map(res => res / t));