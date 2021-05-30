// 递归的时候给它缓存一下
// 无副作用，相同的输入会有相同的输出
// f(x) = x + 10
// f(10) = 20 计算出来一个结果 缓存一下 {10 : 20}
// 再计算f(10) 就没必要计算了，直接到缓存里面取

let cache1 = {};
function add10(x) {
  if (cache1[x] !== undefined) {
    console.log('取出缓存');
    return cache1[x];
  }
  let res = x + 10;
  console.log('经过计算');
  cache1[x] = res;
  return res;
}

console.log(add10(10));
console.log(add10(10));
console.log(add10(10));

let cache2 = {};
function buildUrl(url, obj) {
  // console.log(obj,'--');
  // console.log(JSON.stringify(obj),'----');
  let k = url + JSON.stringify(obj);
  if (cache2[k] !== undefined) {
    console.log(1);
    return cache2[k];
  }
  let parts = [];
  for (let key of Object.keys(obj)) {
    parts.push(`${key}=${obj[key]}`)
    // console.log(obj[key]);
    // console.log(key);
  }
  let res = `${url}?${parts.join('&')}`;
  cache2[k] = res;
  console.log(2);
  return res;
}

console.log(buildUrl('api.com', {a:1, b:2}));
console.log(buildUrl('api.com', {a:1, b:2}));

// 雷同 ？封装
// 1. 不同 通过参数传进来, 功能不一样，在 js 里面实现某个功能（放到函数里面完成）
// 2. 公用 内部：缓存（2.1 let cache; 2.2 if() {} 2.3 cache[] = res ）

// 过程：上面提到的 2.1 2.2 2.3 者三个步骤，完成缓存的一个过程，
// 2.1 2.2 2.3 多个地方都需要这样一个 过程（一段逻辑）
// 所以 封装 2.1 2.2 2.3
// 月影 函数式：过程抽象

function _add10(x) {
  return x + 10;
}

function memorize(func) {
  let cache = {};
  return function (...args) {
    let k = JSON.stringify(args);
    if (cache[k] !== undefined) {
      console.log('cache');
      return cache[k];
    }
    let res = func(...args);
    cache[k] = res;
    console.log('cal');
    console.log(res);
    return res
  }
}

let memorizeAdd = memorize(_add10);
memorizeAdd(10);
memorizeAdd(10);
memorizeAdd(10);

