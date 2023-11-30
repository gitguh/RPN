// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua\

console.log("Soal Pertama - Melakukan Looping Menggunakan While\n");

let i = 1;
let j = 5;
while (i <= 5) {
  console.log(`LOOPING PERTAMA Ke-${i}`);
  i++;
}

console.log(" ");

while (j >= 1) {
  console.log(`LOOPING KEDUA Ke-${j}`);
  j--;
}

console.log(" ");

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Soal Kedua - Melakukan Looping Menggunakan For\n");

for (i = 1; i <= 5; i++) {
  console.log(`LOOPING PERTAMA Ke-${i}`);
}

console.log(" ");

for (i = 5; i >= 1; i--) {
  console.log(`LOOPING KEDUA Ke-${i}`);
}

console.log(" ");

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("Soal Ketiga - Angka Ganjil dan Genap");
console.log(" ");

for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} GENAP`);
  } else {
    console.log(`${i} GANJIL`);
  }
}

console.log(" ");

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Perulangan dengan pertambahan counter sebesar 2 itu == kelipatan 3
// Perulangan dengan pertambahan counter sebesar 5 itu == kelipatan 6
// Perulangan dengan pertambahan counter sebesar 9 itu == kelipatan 10
console.log("Soal Keempat - Counter Kelipatan\n");

for (i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`${i} Kelipatan 3`);
  }
}

console.log(" ");

for (i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(`${i} Kelipatan 6`);
  }
}

console.log(" ");

for (i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(`${i} Kelipatan 10`);
  }
}

console.log(" ");

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

console.log("Soal Kelima - Bintang Asteriks\n");

let text = "";
for (baris = 0; baris <= input; baris++) {
  for (bintang = 0; bintang <= baris; bintang++) {
    text += "*";
  }
  text += "\n";
}
console.log(text);
