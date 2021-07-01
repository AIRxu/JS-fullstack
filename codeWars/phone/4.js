function createPhoneNumbers(numbers) {
  var format = '(xxx) xxx-xxxx';
  // for(number in numbers) {
  //   console.log(number);
  //   format = format.replace('x', number);
  // }
  numbers.forEach(number => {
    format = format.replace('x', number);
  })
  return format
}
console.log(createPhoneNumbers([1,2,3,4,5,6,7,8,9,0]));