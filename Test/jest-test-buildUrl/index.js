// const math = require('./math');
const {add, minus} = require('./math');
// console.log(math);

// 手写测试add函数
// let result = add(3, 7);
// let expected = 10;
// if (result !== expected) {
//   throw new Error('3 + 7 = 10');
// }

function expect(result) {
  return{
    toBe:function(value) {
      if (result !== value) {
        throw new Error('真实值和预期值不同！')
      }
    }
  }
}

expect(add(7,3)).toBe(10);
expect(minus(7,3)).toBe(4);
// jest

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc}测试通过`);
  } catch(err) {
    console.log(`${desc}测试不通过`);
  }
}

expect(minus(7,3)).toBe(4);
test('测试加法', () => {
  expect(add(7,3)).toBe(101);
})
test('测试减法', () => {
  expect(minus(7,3)).toBe(41);
})

