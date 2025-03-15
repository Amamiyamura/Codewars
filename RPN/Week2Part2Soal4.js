// Masalah: Diketahui ada sebuah sebuah bilangan, disuruh untuk mencari pasangan terbesar dari bilangan tersbut contoh: 123456 maka pasangan terbesarnya adalah 56
// Hint: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop
// split masalah:
// Awal awal bikin var baru buat jadiin tipe data number => string (dah) biar bisa di loop
// habis itu bikin loop buat nyari apa? biar bisa kaya gini ngga sih? 641573 jadi 64 41 15 57 73 pake nested ngga? ngga usah sih tinggal pake num[i] + num[i+1] kan
// coba buat loop biar bisa nampilin gitu (udah) sekarang apa? bandingin kan? cara bandinginnya? kan dia string
// ubah ke angka masukin ke var baru terus bandingin sama var baru loop selanjutnya
// cara kita buat ngambil hasil sebelumnya gimana?
// blok padahal kau dah bikin var hasil diatas ngga dipake, makanya pake njir
// tinggal masukin ke hasil terus bandingin sama nilai sekarang

num = 910233;
numString = num.toString();
let hasil = 0;
for (let i = 0; i < numString.length - 1; i++){     // karena kita ingin memasangkan angkanya maka par stop harus dikurangi agar nilai value terakhir tidak dipasangkan
    let temp = 0;   // buat var baru temp buat tampungan
    temp = numString[i] + numString[i+1];   // isi temp dengan index ke i numString + indeks ke i+1 numString
    let nilai = parseInt(temp);      // ubah string temp jadi angka
    if (nilai > hasil){     // jika hasil melebihi hasil sebelumnya maka tampung ke hasil
        hasil = nilai;
    } 
}
console.log(hasil);
