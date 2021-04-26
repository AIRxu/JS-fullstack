
// [5, -1, 2, 4, 16, 82, 23]
const arr1 = [15, -1, 21, 4, 16, 82, 23];
// console.log(arr.length);

function partition(nums, left, right) {
  if (left >= right) return;
  let i = left;
  let j = right;
  let pivot = nums[left];
  while(left < right) {
    while(left < right && nums[right] >= pivot ) right--;
    nums[left] = nums[right];
    while(left < right && nums[left] <= pivot ) left++;
    nums[right] = nums[left];
  }
  nums[left] = pivot;
  // return left;
  partition(nums, i, left - 1);
  partition(nums, left + 1, j);
}

const quickSort = function (arr) {
 
}


console.log(quickSort(arr1));