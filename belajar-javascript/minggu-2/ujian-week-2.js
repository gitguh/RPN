/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, 
jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

/*
Referensi: 
https://www.geeksforgeeks.org/find-the-minimum-distance-between-two-numbers/
https://www.w3resource.com/c-programming-exercises/array/c-array-exercise-84.php

arr = ['o', ' ', 'x']
-- deklarasi variable jarak yang berisi nilai berupa number hingga 1.7976931348623157E+308
-- perulangan i
--- perulangan j
---- (arr[0] = o && arr[2] = x) && 1.7976931348623157E+308 > 2 // karena method Math.abs(0 - 2 = 2)
----- perbarui nilai jarak menjadi 2
... perulangan
-- jika setelah selesai perulangan nilai jarak masih lebih besar dari panjang array
--- kembalikan nilai 0
-- kembalikan nilai jarak
*/
function targetTerdekat(arr) {

  let jarak = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if ((arr[i] == 'o' && arr[j] == 'x' || arr[i] == 'x' && arr[j] == 'o') && jarak > Math.abs(i - j)) {
        jarak = Math.abs(i - j)
      } 
    }
  }

  if (jarak > arr.length) {
    return 0
  }

  return jarak
  
}

// TEST CASES
console.log("Soal 1")
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(" ")

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. 
Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {

  let angkaGenap = [];
  let angkaGanjil = [];
  let kelipatanTiga = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      kelipatanTiga.push(arr[i])
    } else if (arr[i] % 2 == 0 ) {
      angkaGenap.push(arr[i])
    } else {
      angkaGanjil.push(arr[i])
    }
  }

  return [angkaGenap, angkaGanjil, kelipatanTiga]

}

// TEST CASES
console.log("Soal 2")
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
console.log(" ")

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

/*
Referensi:
https://stackoverflow.com/questions/71178336/group-array-of-strings-by-first-letter 
*/
function groupAnimals(animals) {

  animals.sort();
  
  let result = []
  let groupAnimal = []

  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];

    if (i === 0) { // iterasi pertama sudah pasti groupAnimal punya animal dengan huruf a
      groupAnimal.push(animal) // perbarui nilai groupAnimal (animal dengan huruf a)
    } else if (groupAnimal[0][0] !== animal[0]) { // jika huruf animal berbeda dengan huruf groupAnimal
      result.push(groupAnimal) // perbarui nilai result (groupAnimal berhuruf a)
      // console.log(result)
      groupAnimal=[animal] // perbarui nilai groupAnimal (animal dengan huruf c)
      // console.log(groupAnimal)
    } else { // untuk animal yang huruf pertamanya sama
      groupAnimal.push(animal);
    }

  }
  result.push(groupAnimal) // sisa animal yang belum masuk groupAnimal (animal dengan huruf k, yang belum di push) 
  return result

}
// TEST CASES
console.log("Soal 3")
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
console.log(" ")
