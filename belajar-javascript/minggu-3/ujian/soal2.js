/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {

  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  let data = []

  for (let i = 0; i < arrPenumpang.length; i++) {

    let penumpang = arrPenumpang[i][0]
    let naik = arrPenumpang[i][1]
    let tujuan = arrPenumpang[i][2]

    let mulai, berhenti, ongkos

    for (let j = 0; j < rute.length; j++) {

      if (naik === rute[j]) {
        mulai = j
      }

      if (tujuan === rute[j]) {
        berhenti = j
      }

      ongkos = Math.abs(mulai - berhenti) * 2000
      
    }

    data.push({
      penumpang : penumpang,
      naikDari : naik,
      tujuan : tujuan,
      bayar : ongkos
    })
    
  }

  return data

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B'], ['X', 'A', 'C']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
