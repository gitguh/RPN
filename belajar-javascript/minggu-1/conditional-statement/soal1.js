// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

/*
Proxytia
-- Pemain diminta untuk mengisi nama agar bisa melanjutkan proses pemilihan peran
-- jika nama kosong, tampilkan pesan "nama wajib diisi"
-- jika sudah mengisi nama pemain harus memilih 1 dari 3 peran yang tersedia
-- jika peran kosong, tampilkan pesan "Pilih Peranmu untuk memulai game"
-- jika peran sesuai dengan peran yang tersedia, tampilkan pesan respon sesuai dengan peran yang dipilih, 
-- jika pilihan peran tidak sesuai dengan peran yang tersedia, tampilkan pesan "kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/

let nama = "Tes",
  peran = "Penyihir",
  sayHalo = `Halo ${peran} ${nama}! Selamat datang di Proxytia,`;

//code disini gunakan console.log untuk outputnya

if (nama === "") {
  console.log("nama wajib diisi");
} else {
  if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game");
  } else if (peran === "Ksatria") {
    console.log(`${sayHalo} kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "Tabib") {
    console.log(`${sayHalo} kamu akan membantu temanmu yang terluka`);
  } else if (peran === "Penyihir") {
    console.log(`${sayHalo} ciptakan keajaiban yang membantu kemenanganmu!`);
  } else {
    console.log("kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
  }
}
