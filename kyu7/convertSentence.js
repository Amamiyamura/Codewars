// Yang jadi mc di karate kid sering nulis kalimat Kaya Gini
// disuruh buat program untuk membuat kalimat jadi gitu

kata = "Kalo bukan aku siapa lagi";
function ubahKata (kata) {
    let pisahKata = kata.split(" ");
    for (i = 0; i < pisahKata.length; i++) {
        pisahKata[i] = pisahKata[i][0].toUpperCase() + pisahKata[i].slice(1);
    } return pisahKata.join(" ");
}
console.log(ubahKata(kata));

//  saya menyerah disini jadi skip
// karena di code wars fungsinya kosong maka gunakan this
// jadi let pisahKata = this.split(" ")