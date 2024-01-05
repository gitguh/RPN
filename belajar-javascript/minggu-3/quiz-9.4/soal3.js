//TIPS: gunakan method toUpperCase() dan toLowerCase()
// https://www.geeksforgeeks.org/check-whether-the-given-character-is-in-upper-case-lower-case-or-non-alphabetic-character/

function tukarBesarKecil(kalimat) {

  let result = ""

  for (let i = 0; i < kalimat.length; i++) {

    let char = kalimat[i]

    if (char >= "A" && char <= "Z") {
      result += char.toLowerCase()
    } else if (char >= "a" && char <= "z") {
      result += char.toUpperCase()
    } else {
      result += char
    }

  }

  return result

}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
