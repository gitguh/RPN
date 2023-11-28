// Operator Perbandingan (Comparison) (Akan mereturn nilai true / false)
/* 
== membandingkan nilai = nilai
=== membandingkan nilai dan tipe data = nilai dan tipe data
!= tidak sama dengan
!== tidak sama dengan nilai atau tipe data
> lebih besar
< lebih kecil
>= lebih besar sama dengan
<= lebih kecil sama dengan
*/

let number = 5;
let string = "5";
console.log(number < 10); // true (5 < 10)
console.log(number != 5); // false (5 == 5)
console.log(number == string); // true (5 == "5")
console.log(number === string); // false (5 !== "5")

// Operator Logika
/*
&& and (semua kondisi harus terpenuhi untuk mereturn nilai true)
|| or (cukup salah satu kondisi yang terpenuhi untuk mereturn nilai true)
! not (negasi)
*/

console.log(number < 10 && number >= 5); // true karena kondisi 5 < 10 dan 5 >= 5
console.log(number < 10 || number > 5); // true karena kondisi 5 < 10
console.log(!(number == 10)); // true karena 5 != 10
