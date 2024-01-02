function cariMedian(arr) {

  arr.sort((a,b) => a - b); // urutkan array

  let nilaiTengah = Math.floor(arr.length / 2) // mencari index nilai tengah

  if (arr.length % 2 === 0) { // jika array genap
    return (arr[nilaiTengah - 1] + arr[nilaiTengah]) / 2 // kembalikan rata-rata dari dua nilai tengah >> contoh (7+8) / 2 = 7.5
  } else { // jika array ganjil
    return arr[nilaiTengah] // kembalikan nilai tengah
  }
  
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

// console.log(cariMedian([7, 2, 10, 5, 3])) // 5
// console.log(cariMedian([1, 3, 4, 6, 5, 2])) // 3.5

// https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677/10
