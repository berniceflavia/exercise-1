function threeStepsAB (text) {
    var i = 0

    while (i < text.length) {
        var conclusion

        if (text[i] === 'a') {
           if (text[i + 4] === 'b' || text[i - 4] === 'b') {
               conclusion = 'true'
        } else {
            conclusion = 'false'
        }
        }
        i++
        }

    return conclusion
  }
  console.log(threeStepsAB('lane borrowed'))

  
  
  // TEST CASES
//   console.log(threeStepsAB('lane borrowed')); // true
//   console.log(threeStepsAB('i am sick')); // false
//   console.log(threeStepsAB('you are boring')); // true
//   console.log(threeStepsAB('barbarian')); // true
//   console.log(threeStepsAB('bacon and meat')); // false
//   Diberikan sebuah function yang menerima satu parameter berupa string. 
//   Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b 
//   yang memiliki jarak 3 karakter lain minimal satu kali. 
//   Jika tidak ditemukan sama sekali, kembalikan nilai false.