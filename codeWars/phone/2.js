// codewars  5-10个题
// 代码重构

function createPhoneNumbers(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

console.log(createPhoneNumbers([1,2,3,4,5,6,7,8,9,0]));