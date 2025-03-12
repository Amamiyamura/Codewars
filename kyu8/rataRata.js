// Masalah : menghitung rata rata dalam array, jika array kosong maka return 0
// array bisa pake length ngga si? Bisa
// hint: pake if buat kemabliin array yang kosong, kemudian looping array dengan length biar ngambil nilai satu satu
// habis itu masukin ke jumlah, habis itu jumlah dibagi panjang array

let arr = [2,3,4,5,6];
function rataRata (arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let jumlah = 0;
        for (let i = 0; i < arr.length; i++) {
            jumlah += arr[i];
        } 
        let ratarata = jumlah / arr.length;
        return ratarata;
    } 
}
console.log(rataRata(arr));