// Masalah: Diminta untuk membuat sebuah fungsi yang menerima nilai array sebagai input
// function akan mereturn array baru yang setiap nilainya merupakan angka dari hasil kali dari angka dalam array yang tidak menyertakan angka tersebut
// contoh: jika arr[1,2,3,4,5] maka pada array outputnya adalah [120,60,40,30,24] 120 adalah hasil kali dari angka 2,3,4,5, 60 adalah hasil kali dari angka 1,3,4,5 dst
// split masalah:
// untuk mereturn arr baru maka kita perlu membuat var arr baru
// let arrBaru = [];
// kemudian untuk menghitung jumlah kali dari nilai dalam array maka kita perlu membuat perulangan
// for (let i = 0; i < arr.length; i++)
// kemudian buat perulangan dengan kondisi agar ketika iterasi i dilakukan maka nilai i tidak akan dimasukkan ke dalam perkalian
// if (kecuali != arr[j]) {jumlah = jumlah * arr[j]}
// akhirnya tinggal masukkan hasil perkalian tersebut ke dalam array baru menggunakan push
// arrBaru.push(jumlah);

let arr = [1,2,3,2,5];
let arrBaru = [];   // menampung array baru

// for (let i = 0; i < arr.length; i++) {      // loop untuk mengakses setiap nilai pada array
//     let jumlah = 1;     // Digunakan agar nilai jumlah pada awal pengulangan tidak berubah
//     for (let j = 0; j < arr.length; j++){   // loop untuk memisahkan nilai dalam array
//         if (arr[j] != arr[i]){     // kondisinya salah tidak valid jika ada nilai yang sama
//             jumlah = jumlah * arr[j];
//         }
//     }
//     arrBaru.push(jumlah);
// }
// console.log(arrBaru);

function perkalianUnik(arr) {
    let arrBaru = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = [...arr];
        temp.splice(i,1);
        let jumlah = 1;
        for (let j = 0; j < temp.length; j++) {
            jumlah = jumlah * temp[j];
        }
        arrBaru.push(jumlah);
    }
    return arrBaru;
  }
