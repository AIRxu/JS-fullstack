function f(n) {
  // 先写退出条件
  if(n == 1) return 1;
  if(n == 2) return 2;
  // 直接递归会重复计算的 不用重复计算那么时间和内存就会更好
  // 变量可以用
  let ret = 0,
    pre = 2, //前一个是2  重复使用这个空间
    prepre = 1;
  // 递归可以优化成循环
  for(i = 3; i <= n; i++) {
    ret = pre + prepre;
    prepre = pre;
    pre = ret;
  }
  return ret
}
console.log(f(100));