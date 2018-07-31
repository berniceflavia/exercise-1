function isPrime (number) {
  var i = 1
  var divider = 0
  var conclusion

  while (i <= number) {
      if (number % i === 0) {
        divider++
      }
      i++
  }
  if (divider <= 2) {
      conclusion = 'true'
  } else {
      conclusion = 'false'
  }
  return conclusion
}
console.log(isPrime(5))

// TEST CASES
// console.log(isPrime(3)); // true
// console.log(isPrime(7)); // true
// console.log(isPrime(6)); // false
// console.log(isPrime(23)); // true
// console.log(isPrime(33)); // false
// Diberikan sebuah function yang menerima satu parameter berupa angka.
//  Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.