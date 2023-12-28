//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima

// Rumus bilangan prima Mersenne adalah, Mn = (2^n) – 1. Di mana n adalah bilangan prima dan Mn adalah bilangan prima yang baru didapatkan. 
// Jadi, jika 2 dipangkatkan oleh sebuah bilangan prima dan dikurang satu, maka akan menghasilkan bilangan prima. (sisa hasil bagi jika dibagi 2 bukan 0)
// Contoh n = 3, maka rumusnya menjadi (2^3) – 1 = 7, dan 7 merupakan bilangan prima.

function angkaPrima(angka) {
  for (let i = 2; i < angka; i++) {
    if ( angka % i === 0 ) {
      return false // jika angka habis dibagi i, berarti bukan bilangan prima
    }
  }
  return angka > 1 // kembalikan nilai true apabila angka > 1 (karena 1 bukan bilangan prima)
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// console.log(angkaPrima(9)); // false
// console.log(angkaPrima(11)); // true
// console.log(angkaPrima(15)); // false
// console.log(angkaPrima(17)); // true
// console.log(angkaPrima(21)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(28)); // false
