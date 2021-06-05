// 二叉树的广度优先遍历
var levelOrder = function(root) {
  if (!root) return [];
  // 如果没有root 就返回一个空数组
  let queue = [root];
  let res = [];
  while(queue.length) {
      let rowNodes = queue.splice(0);
      for(node of rowNodes) {
          res.push(node.val);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
  }
  return res;
};


// N叉树的层序遍历
var levelOrder = function(root) {
  if(root === null) return [];
  let queue = [root];
  let res = [];
  while(queue.length) {
      let rowNodes = queue.splice(0);
      let cell = [];
      for(node of rowNodes) {
          cell.push(node.val);
          // 把这一层所有节点的孩子都push到队列里去
          if(node.children) {
              for(child of node.children) {
                  queue.push(child);
              }
          }
      }
      res.push(cell);
  }
  return res;
};