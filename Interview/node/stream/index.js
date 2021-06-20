// console.log(buf.write('hello world'));
const buf1 = Buffer.from('hello world');
console.log(buf1);

// 如何查看'hello world' 在缓冲区格式
// 分步思维
// 1、 查询每个字符的ascll码并将其转换为16进制
// 2、 使用map 字符串拼接0x + 
// 3、 toString转化为字符串形式

let array = 'hello world'.split('').map((i) => {
  return '0x' + i.charCodeAt(0).toString(16)
})
// console.log(array);
const buf2 = Buffer.from(array);
console.log(buf2.toString());