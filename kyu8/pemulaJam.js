// Masalah: mengubah input h = hours, m = menit, s = second menjadi keluaran milisecond (1s => 1000)
// tinggal kalikan aja kalo h * 360000; m * 60000; s * 1000;
// buat fungsinya

let h = 1;
let m = 1;
let s = 1;

function past(h,m,s){
    h = h * 3600000;     // karena 1 jam 360 detik = 3600000s
    m = m * 60000;      // karena 1 menit 60 detik = 6000s
    s = s * 1000;       // karena 1 detik 1000ms
    return total = h+m+s;
}

console.log(past(h,m,s));
