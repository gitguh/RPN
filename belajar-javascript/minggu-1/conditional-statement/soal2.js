// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

/*
if (tanggal >= 1 && tanggal <= 31) {
    tanggal = tanggal;
} else {
    tanggal = 17;
}
*/
// jika expression true cocok dengan case tanggal (if statement diatas di konversi menjadi switch statement)
switch (true) {
  case tanggal >= 1 && tanggal <= 31: // cek apakah tanggal lebih besar dari 1 dan lebih kecil dari 31
    tanggal; // kembalikan nilai tanggal
    break;
  default:
    tanggal = 17; // kembalikan nilai 17 jika expression tidak sesuai dengan case
}

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = "Agustus";
}

switch (true) {
  case tahun >= 1900 && tahun <= 2200:
    tahun;
    break;
  default:
    tahun = 1945;
}

console.log(`${tanggal} ${bulan} ${tahun}`);
