let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4],//加密的qq号
  // console.log(typeof enc_qq);//object 对象的一种，数组是可以枚举的对象
  qq = [], //真正的qq号
  head = 0, //头指针 变量中间值
  tail = 9; //尾指针
//     !        !~
while (head < tail) {
  // 1.把第一个要从加密数组中删除的数据放入数组qq中
  qq.push(enc_qq[head]);
  head++;
  // 2.把加密数组中第二个数放到组中最后一个
  enc_qq[tail] = enc_qq[head];
  tail++;
  head++;
}
// 数组名.join('') 把数组中的元素用双引号中的符号一个个连接起来
console.log(qq.join(''));

// 6 3 1 7 5 8 9 2 4
//   1 7 6 8 9 2 4 3
//     6 8 9 2 4 3 7
//       9 2 4 3 7 8
//         4 3 7 8 2
//           7 8 2 3
//             2 3 8
//               8 3
//                 3