/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

function dataHandling(data) {
  let dataDiri = "";
  for (i = 0; i < data.length; i++) {
    dataDiri += `Nomor ID: ${data[i][0]}\n`;
    dataDiri += `Nama Lengkap: ${data[i][1]}\n`;
    dataDiri += `TTL: ${data[i][2]} ${data[i][3]}\n`;
    dataDiri += `Hobi: ${data[i][4]}\n\n`;
  }
  return dataDiri;
}

console.log(dataHandling(input));

let input2 = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(data) {
  let name = data[1];
  let dateOfBirth = data[3].split("/");
  let modifyData = data;

  modifyData.splice(1, 1, `${name} Elsharawy`);
  modifyData.splice(2, 1, `Provinsi ${data[2]}`);
  modifyData.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(modifyData);

  if (dateOfBirth[1] === "05") {
    console.log("Mei")
  }

  // Referensi : https://www.freecodecamp.org/news/swap-two-array-elements-in-javascript/

  const swap = (arr, x, y) => {
    [arr[x], arr[y]] = [arr[y], arr[x]];
    return arr;
  };

  let firstSwap = swap(data[3].split("/"), 0, 2);
  let secondSwap = swap(firstSwap, 1, 2)

  console.log(secondSwap)

  // Referensi : https://www.w3schools.com/js/js_array_methods.asp

  // let year = dateOfBirth.pop();
  // dateOfBirth.unshift(year);
  // console.log(dateOfBirth);

  console.log(dateOfBirth.join("-"));

  console.log(name.slice(0, 15));
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
