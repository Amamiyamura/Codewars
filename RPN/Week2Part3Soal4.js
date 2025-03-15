// Masalah: Sekarang menentukan array apakah deret geometri
// hint: Deret gemoteri biasanya ditandai dengan suku ke i merupakan x kali dari suku sebelumnya
// split masalah:
// gunakan fungsi yang tadi dibuat untuk mencari deret aritamtika tapi sekarang ubah agar selisih nya berasal dari i+1 / i

arr = [2, 4, 6, 8];
let selisih = [];
let sama = true;
for (let i = 0; i < arr.length -1; i++) {
    selisih.push(arr[i+1] / arr[i]);
    for (let j = 0; j < selisih.length -1; j++){
        if (selisih[j] !== selisih[j+1]) {
            sama = false;
        }
    }
}
console.log(sama);