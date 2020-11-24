## 类型

### 基本数据（基础）类型

Null
Undefined
String
Number
Bool

## 复杂数据(引用)类型

Object
  - array
  - function
  - object
  - reg(正则)
  - date

`运行时`决定,变量的类型

``` js
    var a = 123;
    var b = [];
    function c() {}
    var d = { a:1, b:2 }
    var e = /[0-9]/
    var f = Date.now()
```

## 定义变量的关键字
- var: es5

块级变量：
- let：可变的，认为是更完美的var
- const：常量，不可变的

## ==
  判断值是否相等，但是会进行类型转换
## ===
  判断值是否相等，并且不会进行类型转换

## 盒模型

- content-box
width/height: content 区域
- border-box
width/height: border及以内的区域




## 栈内存
 小: 基本数据 (变量和值都存在栈内存里面)

## 堆内存
 大: object (变量存在栈内存里,值存在堆内存里)
 大小很容易调整