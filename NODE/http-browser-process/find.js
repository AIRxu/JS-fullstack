// 问题一：如何找到a
//  a  'i am good'

function match(string) {
  for( let char of string) {
    if (char === 'a') {
      return true;
    }
  }
  return false
}

// 问题二：如何找到ab
// 'i ab good'