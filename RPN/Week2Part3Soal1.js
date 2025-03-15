// Masalah: mencari nilai mean atau rata rata dalam sebuah array
// hint: gunakan math untuk mencari pembulatan
// split masalah:
// buat perulangan untuk menjumlahkan nilai pada array kemudian bagi dengan jumlah array
// gunakan math Round() untuk membulatkan hasilnya

let num = [1, 2, 3, 4, 5];
let jumlah = 0;
for (let i = 0; i < num.length; i++) {
    jumlah += num[i];
}
rataRata = Math.round(jumlah / num.length);
console.log(rataRata);

// jadikan sebuah fungsi