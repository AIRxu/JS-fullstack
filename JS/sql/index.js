const users = [
  { id: 0, name: 'wxj', age: 18, sex: 'male'},
  { id: 1, name: 'john', age: 28, sex: 'male'},
  { id: 2, name: 'bob', age: 33, sex: 'male'},
  { id: 3, name: 'tom', age: 22, sex: 'male'},
  { id: 4, name: 'alice', age: 18, sex: 'female'},
  { id: 5, name: 'rihana', age: 35, sex: 'female'},
  { id: 6, name: 'sara', age: 20, sex: 'female'},
]

// SQL 业务能力封装起来
// es5 funciton类
function SQL(table) {
  this.table = table; //数据源
  // 结果的保存变量，保存每一步操作过后的结果
  this._result = null; //结构 挂载到this对象属性 变量是用来存储中间结果的
  this._getRows = function() {
    return this._result ? this._result : this.table;
  }
}
SQL.prototype.where = function(predicate) {
  // console.log(predicate);
  var rows = this._getRows();
  // 如果是数组的话就直接filter，如果是对象的话就
  if (Array.isArray(rows)) {
    this._result = rows.filter(predicate);
  } else {
    // json Object
    // 拿出每一个数组，filter返回的仍然是object
    // console.log(Object.keys(rows));
    this._result = Object.keys(rows)
      .reduce(function(groups, group) {
        // rows是个对象，male和female
        // rows[group]可以拿到拿到两个数组
        // console.log(rows, rows[group]);
        // 将male和female内的都过滤一遍，过滤完之后返回groups也就是结果
        groups[group] = rows[group].filter(predicate);
        return groups
      }, {})
  }
  // console.log(this._result);
  return this;
}
SQL.prototype.groupBy = function(key) {
  // console.log(key);
  // 分组， reduce
  // 一个结果数组n 分组成 一个json object 1
  var rows = this._getRows(); //私有方法
  // console.log(rows);
  this._result = rows.reduce(function(groups, row) {
    // console.log(row, row[key]);
    var group = row[key];
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(row)
    // console.log(groups[group]);
    return groups;
  }, {})
  // console.log(this._result);
  // 返回this就可以链式调用了！！！
  return this;
}
SQL.prototype.getResult = function() {
  return this._result;
}

var sql = new SQL(users)  //
// filter true||false
var predicate = function(row) {
  return row.age < 30
}
var result = sql.groupBy('sex').where(predicate).getResult();
console.log(result);