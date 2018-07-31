function gcd (firstNumber, secondNumber) {
  var i = 0
  var factor
  
  while (i <= firstNumber) {
      if (firstNumber % i === 0) {
        if (secondNumber % i === 0) {
            factor = i
        }
       }
      i++
  }
  return factor
}
console.log(gcd(12, 16))

// TEST CASES
// console.log(gcd(12, 16)); // 4
// console.log(gcd(50, 40)); // 10
// console.log(gcd(22, 99)); // 11
// console.log(gcd(24, 36)); // 12
// console.log(gcd(17, 23)); // 1
// Diberikan sebuah function yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.