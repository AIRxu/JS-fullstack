let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function bubble(arr) {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len-i-1; j++) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
  return arr
}

console.log(bubble(arr1));
