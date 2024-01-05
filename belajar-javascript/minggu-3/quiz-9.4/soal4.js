/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(str) {

  str.toLowerCase()
  let jarak = 0

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < str.length; j++) {

      if(str[i] === 'a' && str[j] === 'b' || str[i] === 'b' && str[j] === 'a'){
        jarak = Math.abs(i-j) - 1
      }
      
    }
    
  }

  if (jarak === 3) {
    return true
  } else {
    return false
  }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
// console.log(checkAB('bacaan')); // true
// console.log(checkAB('a   b')); // true
