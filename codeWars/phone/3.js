function createPhoneNumbers(numbers) {
  numbers = numbers.join('');
  return `(${numbers.substring(0,3)}) ${numbers.substring(3,6)}-${numbers.substring(6,10)}`
}

console.log(createPhoneNumbers([1,2,3,4,5,6,7,8,9,0]));