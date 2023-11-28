// Cara membuat variable (deklarasi variable)
var a; // Cara membuat variable yang sudah tidak direkomendasikan
let b; // Sama seperti var, cara membuat variable yang direkomendasikan
const c = "Constant"; // Setelah dideklarasi harus diinisialisasi dan tidak bisa diubah nilai variablenya

// Variable sebagai tempat untuk menampung tipe data (string, number, boolean, array, object)
let name = "Panjoel"; // Tipe data string (text berada di dalam "" atau '')
let date = 28; // Tipe data number bilangan bulat (integer)
let isTrue = true; // Tipe data boolean (false = 0, true = 1)
let decimal = 999.999; // Tipe data number bilangan desimal (float)

// Operator Aritmatika (*/+-%) (Kurung > Kali > Bagi > Tambah > Kurang)

// membuat variable langsung dengan value
let first = 1;
let second = 2;

// melakukan operasi penjumlahan dan langsung tampilkan hasilnya
console.log("penjumlahan 1 + 2 = ", first + second);

// melakukan operasi aritmatika yang hasilnya disimpan di dalam sebuah variable
let hasil; // deklarasi variable untuk menampung hasil operasi aritmatika
hasil = first + second; // melakukan operasi aritmatika dan hasilnya akan disimpan di dalam variable hasil
console.log(hasil); // 3
hasil = first - second; // pengurangan
console.log(hasil); // -1
hasil = first * second; // perkalian
console.log(hasil); // 2
hasil = first / second; // pembagian
console.log(hasil); // 0.5
hasil = first % second; // modulus (sisa hasil bagi)
console.log(hasil); // 1

// Jika ingin mengubah nilai suatu variable, langsung panggil variable = isi nilainya (tidak perlu deklarasi ulang)

// String bisa ditambah namun tidak bisa dikurang dengan operator aritmatika
let firstName = "Juned";
let lastName = "Junaedi";
let fullName = firstName + " " + lastName; // menambahkan variable firstName (string) dengan string kosong (spasi) dan ditambah lagi dengan variable lastName (string)
console.log(fullName); // Juned Junaedi
fullName = firstName - lastName;
console.log(fullName); // NaN (tidak error, tetapi hasilnya NaN karena kita melakukan operasi aritmatika pada string)

// Alur pembacaan code (kiri ke kanan, atas ke bawah)

let number = 20; // kita deklarasikan variable number dengan nilai awal 20
console.log(number + 10); // ketika kita jumlahkan variable number dengan 10 maka hasilnya = 30
number = 10; // sekarang kita ubah nilai variable number menjadi 10
console.log(number + 10); // maka ketika kita jumlahakan variable number dengan 10 hasilnya menjadi = 20
number = false; // sekarang kita ubah menjadi boolean false (nilainya 0)
console.log(number + 10); // hasilnya tetap 10 karena false = 0 (0+10 = 10)
