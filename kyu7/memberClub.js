// The Western Suburbs Croquet Club membership: Senior dan Open
// Untuk menjadi senior setidaknya 55 tahun (n >= 55) dan handicap diatas 7; handicap berkisar antara -2 - +26
// semakin rendah handicapnya berarti semakin bagus pemainnya (Anda piir kalo begini pasti kebalik kan, saja juga piir gitu ternayata enggak)
// Input akan terdiri dari daftar pasangan, Usia pemain dan handicap pemain
// Keluaran akan terdiri dari sebuah daftar nilai string yaitu: Senior atau Open

function openOrSenior(data){
    let hasil = [];                         // inisialisasi array kosong hasil
    for (let i = 0; i < data.length; i++) {     // Lakukan perulangan sebanyak data.length
        let usia = data[i][0];              // inisialisasi var baru usia dengan colom 0 dari iterasi ke i
        let handicap = data[i][1];          // inisialisasi var baru handicap dengan colom 1 dari iterasi ke i
        if (usia >= 55 && handicap > 7) {   // penkondisian: jika usia >= 55 dan handicap > 7 maka masukkan "Senior" ke hasil jika lainnya masukkan "Open" ke hasil
            hasil.push("Senior");
        } else {
            hasil.push("Open");
        }
    } return hasil;                         // kembalikan nilai hasil / untuk memasukkan hasil iterasi ke hasil
  }

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));