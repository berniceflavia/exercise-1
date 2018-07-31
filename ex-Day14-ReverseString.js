function reverseString (text) {
  var str = ''
  var i = text.length - 1

  while (i >= 0) {
      str = str + text[i]
      i = i - 1
  }
  return str
}
console.log(reverseString('Hello World and Coders'))

// TEST CASES
// console.log(reverseString('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(reverseString('John Doe')); // eoD nhoJ
// console.log(reverseString('I am a bookworm')); // mrowkoob a ma I
// console.log(reverseString('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(reverseString('Super')); // repuS