// Switch Statement (digunakan untuk melakukan aksi yang berbeda berdasarkan kondisi yang berbeda)
/*

// switch statement (untuk memilih satu dari banyak blok kode untuk dieksekusi)

switch (expression){
    case x:
        // jika ekspresi sesuai dengan case x maka jalankan blok kode ini
        break;
    case y:
        // jika ekspresi sesuai dengan case y maka jalankan blok kode ini
        break;
    default:
        // blok kode default jika case tidak sesuai dengan ekspresi (mirip seperti else)
}

// cara kerja switch statement

- switch expression hanya dievaluasi satu kali (yang dievaluasi hanya boolean)
- nilai expression dibandingkan dengan nilai setiap case (jadi kita tidak mengevaluasi apakah case = true / false, tapi kita membandingkan apakah nilai expression == case)
- jika nilai expression dan nilai casenya cocok, maka jalankan blok code tersebut
- jila nilai expression dan nilai casenya tidak cocok, maka jalanakn block code default

// kata kunci break

- digunakan untuk menghentikan eksekusi switch block
- jika tidak ada break, blok kode switch statement akan terus dijalankan walaupun expression != case
*/

// Contoh Switch Case Berbeda Menggunakan Blok Kode Yang Sama
switch (new Date().getDay()) {
  case 4:
  case 5:
    console.log("Soon it is Weekend");
    break;
  case 0:
  case 6:
    console.log("It is Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

// https://stackoverflow.com/questions/3463833/expression-inside-switch-case-statement
