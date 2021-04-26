
const arr = [20,10,25,9,90,6,21,1,3,35]

let quickSort = function (arr) {
  if (arr.length <= 1) return;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for ( i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(arr));