// Masalah: Diminta untuk mengembalikan input yang diterima menjadi array multidimensi
// array multidimensi akan dikembalikan dengan 3 kategori:
// kelompok pertama (baris pertama) merupakan angka-angka genap
// kelompok kedua (baris ke-2) merupakan angka angka ganjil
// kelompok ketiga (baris ke-3) merupakan angka-angka kelipatan 3
// contoh: jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
// split masalah: 
// Pertama tama kita buat 4 var array baru, yaitu : arrBaru(untuk menampung arrBaru nantinya), genap(untuk menyimpan nilai array yang genap)
// ganjil(untuk menyimpan nilai array yang ganjil) dan kelipatan3(untuk menyimpan nilai array yang kelipatan 3)
// kemudian buat perulangan untuk menggecek nilai indeks jika indeksnya merupakan kelipatan 3 maka masukkan ke arr kelipatan 3
// jika ganjil masukkan ke ganjil dan jika genap masukkan ke genap

function kelompokAngka (arr) {
    let arrBaru = [];
    let genap = [];
    let ganjil = [];
    let kelipatan3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            kelipatan3.push(arr[i]);
        } else if (arr[i] % 2 === 0) {
            genap.push(arr[i]);
        } else {
            ganjil.push(arr[i]);
        } 
    } 
    arrBaru.push(genap, ganjil, kelipatan3);
    return arrBaru;
}

console.log(kelompokAngka([2, 4, 6]));
console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(kelompokAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(kelompokAngka([])); // [ [], [], [] ]

// let arrBaru = [];
// arrBaru.push(arr,brr);  // buat push array yang udah dicari
// console.log(arrBaru);
// let genap = [];
// let ganjil = [];
// let kelipatan3 = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         kelipatan3.push(arr[i]);
//     } else if (arr[i] % 2 === 0) {
//         genap.push(arr[i]);
//     } else {
//         ganjil.push(arr[i]);
//     }
// }

// console.log(genap);
// console.log(ganjil);
// console.log(kelipatan3);
// arrBaru.push(genap, ganjil, kelipatan3);
// console.log(arrBaru);