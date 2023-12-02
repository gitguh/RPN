// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return true
  } else if (angka2 === angka1) {
    return -1
  } else {
    return false
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)) // true
console.log(bandingkanAngka(5, 3)) // false
console.log(bandingkanAngka(4, 4)) // -1
console.log(bandingkanAngka(3, 3)) // -1
console.log(bandingkanAngka(17, 2)) // false

// ------------------------------------
console.log("")
// ------------------------------------

// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

/* 
Referensi: https://www.geeksforgeeks.org/reverse-a-string-in-javascript/#approach-6-using-for-loop
a for loop is used to iterate through the characters of the string in reverse order. Starting from the last character (str.length – 1), the loop decrements i until it reaches 0. During each iteration, the current character (str[i]) is appended to the reversed string.

-- contoh ketika menerima kata tes
-- balik = ""
-- kata = tes
-- kata.length = 3
--- i = 3 - 1 (3 - 1 = 2 (index ke 2 = s)); 2 >= 0; balik = "" + "s"; i--
--- i = 2 - 1 (2 - 1 = 1 (index ke 1 = e)); 1 >= 0; balik = "s" + "e"; i--
--- i = 1 - 1 (1 - 1 = 0 (index ke 0 = t)); 0 >= 0; balik = "se" + "t"; i--
-- return balik (balik = set)

.length - 1 (akan dimulai dari akhir karena index dimulai dari 0, sedangkan length dimulai dari 1)
*/

function balikKata(kata) {
  let balik = ""
  for (i = kata.length - 1; i >= 0; i--) {
    balik += kata[i]
    // console.log(balik)
  }
  return balik
}

// TEST CASES
console.log(balikKata("Hello World and Coders")) // sredoC dna dlroW olleH
console.log(balikKata("John Doe")) // eoD nhoJ
console.log(balikKata("I am a bookworm")) // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")) // ybboh ym si gnidoC
console.log(balikKata("Super")) // repuS

// ------------------------------------
console.log("")
// ------------------------------------
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

/*
Referensi : https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-51.php

menghitung jam ( menit / 60 ) dan dibulatkan kebawah dengan object method math.floor
menghitung menit ( sisa hasil bagi dari 60 )
jik sisa hasil bagi menit kurang dari 10; tambahkan 0
*/

function konversiMenit(menit) {
  let hours = Math.floor(menit / 60)
  let minutes = menit % 60
  if (minutes < 10) {
    return `${hours}:0${minutes}`
  } else {
    return `${hours}:${minutes}`
  }
}

// TEST CASES
console.log(konversiMenit(63)) // 1:03
console.log(konversiMenit(124)) // 2:04
console.log(konversiMenit(53)) // 0:53
console.log(konversiMenit(88)) // 1:28
console.log(konversiMenit(120)) // 2:00

// ------------------------------------
console.log("")
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

/*
Referensi: https://stackoverflow.com/questions/45661429/codewar-challenge-javascript
-- str = xox
-- str.length = 3
-- x dan o = 0
--- i = 0; 0 < 3;
---- jika str ke-[0] yang dikonversi ke huruf kecil dengan method toLowerCase = x; x + 1; jika tidak; o + 1; i++ (x = 1)
--- i = 1; 1 < 3;
---- jika str ke-[1] yang dikonversi ke huruf kecil dengan method toLowerCase = x; x + 1; jika tidak; o + 1; i++ (o = 1)
--- i = 2; 2 < 3;
---- jika str ke-[2] yang dikonversi ke huruf kecil dengan method toLowerCase = x; x + 1; jika tidak; o + 1; i++ (x = 2)
--- i = 3; 3 < 3;
-- kembalikan hasil dari x === o (false karena x = 2 dan o = 1)
*/

function xo(str) {
  let x = 0,
    o = 0

  for (i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++
    } else if (str[i].toLowerCase() === "o") {
      o++
    }
  }

  return x === o
}

// TEST CASES
console.log(xo("xoxoxo")) // true
console.log(xo("oxooxo")) // false
console.log(xo("oxo")) // false
console.log(xo("xxxooo")) // true
console.log(xo("xoxooxxo")) // true
