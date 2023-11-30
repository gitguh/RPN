/*

Referensi:

Web Programming Unpas - PENGULANGAN : TABEL PENELUSURAN
https://www.youtube.com/watch?v=2hh8xt1EvQ8

Programmer Zaman Now - TUTORIAL JAVASCRIPT DASAR BAHASA INDONESIA
https://www.youtube.com/watch?v=SDROba_M42g&t=14780s

Web Programming Unpas - PENGULANGAN & PENGKONDISIAN BERSARANG pada JAVASCRIPT
https://www.youtube.com/watch?v=uRy81uWrkOQ

Kelas Terbuka - Belajar C++ [Dasar] - 24 - Latihan membuat Segitiga Siku-Siku
https://www.youtube.com/watch?v=-p9d5RsIHvU

MDN Web Docs:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

W3Schools:
https://www.w3schools.com/js/js_loop_for.asp

Discord RPN:
https://discord.com/channels/1129078950589628476/1129091799311458364

*/

// Nested Loop
let input = 10;
let variable = ""; // deklarasi variable dengan string kosong yang nantinya akan kita tentukan nilainya
for (i = 1; i <= input; i++) {
  // perulangan untuk mengulang baris sebanyak input
  for (j = 1; j <= i; j++) {
    // perulangan untuk mengulang berapa bintang yang ingin kita cetak dalam baris tertentu
    variable += "*"; // menambahkan karakter * pada variable yang telah dibuat sebelumnya
  }
  variable += "\n"; // untuk membuat baris baru setelah proses looping j selesai
}
console.log(variable);

/*
-- i = 1, apakah i <= 5, iya, lakukan perulangan j
--- j = 1, apakah j <= 1, iya, tambahkan karakter * pada variable
--- j = 2, apakah j <= 1, tidak, jalankan kode selanjutnya (tambahkan baris baru pada variable)

-- i = 2, apakah i <= 5, iya, lakukan perulangan j
--- j = 1, apakah j <= 2, iya, tambahkan karakter * pada variable
--- j = 2, apakah j <= 2, iya, tambahkan lagi karakter * pada variable (jadi variable sekarang = **)
--- j = 3, apakah j <= 2, tidak, jalankan kode selanjutnya (tambahkan baris baru pada variable)

...dst

setelah semua proses looping selesai baru ditampilkan hasilnya
*/
