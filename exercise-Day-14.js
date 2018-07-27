function isArithmeticProgression (numbers) {
  var i = 1
  var difference = numbers[1] - numbers[0]
  while (i < numbers.length) {
    var j = i - 1
    var conclusion
    if (numbers[i] - numbers[j] == difference) {
       conclusion = 'true'
    } else {
       conclusion = 'false'
    }
    i++
  }
  return conclusion
}
console.log(isArithmeticProgression ([2, 4, 6, 8]))


// TEST CASES
// console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
// console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
// console.log(isArithmeticProgression([2, 4, 6, 8])); // true
// console.log(isArithmeticProgression(][2, 6, 18, 54)); // false
// console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
