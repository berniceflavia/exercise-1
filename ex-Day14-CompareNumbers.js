function compareNumbers (firstNumber, secondNumber) {
  var conclusion
  if (secondNumber > firstNumber){
     conclusion = 'true'
  } else if (secondNumber == firstNumber) {
      conclusion = '-1'
  } else {
      conclusion = 'false'
  }
  return conclusion
}
console.log(compareNumbers(17, 2))

// TEST CASES
// console.log(compareNumbers(5, 8)); // true
// console.log(compareNumbers(5, 3)); // false
// console.log(compareNumbers(4, 4)); // -1
// console.log(compareNumbers(3, 3)); // -1
// console.log(compareNumbers(17, 2)); // false
// Diberikan sebuah function yang menerima dua parameter angka. 
// Function akan me-return nilai true jika secondNumber lebih besar dari firstNumber, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.