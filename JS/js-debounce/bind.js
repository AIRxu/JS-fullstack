// bind call apply 都是调用函数
// bind可以让我们分批传递参数
function add1(a, b, c) {
  return a+b+c;
}

function test(reg, str) {
  return reg.test(str);
}

// 两个左斜杠内的内容可以定义为一个正则表达式 g是global的意思

let space = /\n/g;
let tab = /\t/g;
let number = /[0-9]/g;
let str1 = `
11`, str2 = `123`, str3 = `     `;
let str4 = '\t';
// 使用test进行测试空格的时候，每个都要传入第一个参数space
// 这时就可以使用bind来实现绑定第一个参数
// 绑定后只需要传入第二个参数就可以完成测试
let hasSpace = test.bind(null, space);
let hasTab = test.bind(null, tab);
let hasNumber = test.bind(null, number);
console.log(hasSpace(str1));
console.log(hasTab(str3));
console.log(hasNumber(str2));

// console.log(test(space, str1));
// console.log(test(space, str2));
// console.log(test(space, str3));
// console.log(test(number, str3));