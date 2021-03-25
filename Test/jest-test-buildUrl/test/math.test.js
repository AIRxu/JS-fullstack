const{add, minus, buildUrl} = require('../math');

expect(minus(7,3)).toBe(4);
test('测试加法', () => {
  expect(add(7,3)).toBe(10);
})
test('测试减法', () => {
  expect(minus(3,7)).toBe(-4);
})

test('测试buildUrl', () => {
  let url = '/abc';
  let params = {
    a:1, b:2
  }
  expect(buildUrl(url, params)).toEqual('/abc?a=1&b=2');
  params.c = null;
  params.d = undefined;
  expect(buildUrl(url, params)).toEqual('/abc?a=1&b=2');
  url = '/abc#header';
  expect(buildUrl(url, params)).toEqual('/abc?a=1&b=2');
  url = '/abc?arr[]=1?a=1&b=2'
  // let resURL = buildUrl(url, params);
})