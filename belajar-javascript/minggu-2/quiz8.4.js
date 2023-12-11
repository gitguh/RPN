/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  let balikKata = "";
  for (i = kata.length - 1; i >= 0; i--) {
    balikKata += kata[i];
  }
  return balikKata === kata;
}

// TEST CASES
console.log("Soal 1");
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
console.log(" ");

/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
  for (; ;) {
    num++; // valuenya ditambah satu, agar bisa mencari angka palindrome selanjutnya
    num = num.toString();
    let angka = "";
    for (i = num.length - 1; i >= 0; i--) {
      angka += num[i];
      // console.log(angka);
      if (num === angka) {
        return parseInt(num);
      }
    }
  }
}

// TEST CASES
console.log("Soal 2");
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(" ");

/* 
Referensi:
https://stackoverflow.com/questions/18679576/counting-words-in-string
https://www.geeksforgeeks.org/javascript-program-to-count-words-of-a-string/
*/
function hitungJumlahKata(kalimat) {
  let totalKalimat = 0;
  for (i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
      totalKalimat++;
    }
  }
  return (totalKalimat += 1);
}

// TEST CASES
console.log("Soal 3");
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
console.log(" ");

/*
-- Deklarasi variable terbesar untuk menyimpan hasil pasangan terbesar
-- Konversi parameter num menjadi string agar bisa di iterasi menggunakan property .length
-- Iterasi parameter num sebanyak panjangnya
--- Di setiap iterasi akan menyimpan pasangan angka(dikonversi menjadi number dengan method parseInt) untuk dibandingkan
--- Cek apakah pasangan angka tersebut adalah pasangan yang terbesar, jika ya, ubah nilai terbesar menjadi pasangan angka terbesar
-- Kembalikan nilai pasangan angka terbesar
*/
function pasanganTerbesar(num) {
  let terbesar = 0;
  num = num.toString();
  for (i = 0; i < num.length; i++) {
    let pasanganAngka = parseInt(num[i] + num[i + 1]);
    if (pasanganAngka > terbesar) {
      terbesar = pasanganAngka;
    }
  }
  return terbesar;
}

// TEST CASES
console.log("Soal 4");
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
