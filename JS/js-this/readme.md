## this
**运行**时决定的,跟定义的时候无关
```js
function foo() {
  this.a + b;
}
```
- 默认的this指向window
- 对象. 的方法调用 就直接指向对象
```js
  <script>
    var obj1 = {
      a: 1,
      say: function () {
        console.log(this.a);
      }
    }
    var obj2 = {
      a:2
    }
    obj1.say.call(obj2);
    obj1.say();
  </script>
```
- call/apply 调用 this指向我们的第一个参数