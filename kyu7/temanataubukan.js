// Masalah: Kita diberikan sebuah input array yang berisikan beberapa string, output yang diharapakan adalah teman kita
// Hint: jika panjang suatu kata dalam array adalah 4 maka itu adalah teman kita
// split masalah:
// kita buat perulangan untuk mengakses / memperoleh setiap string dalam array
// kemudian buat kondisi jika panjang kata = 4 maka masukkan ke var teman
// sekarang coba buat jadi fungsi teman 

function friend(friends){
    let teman = [];
    for (let i = 0; i < friends.length; i++){
        let nama = friends[i];
        if (nama.length === 4){
            teman.push(nama);
        }
    }
    return teman;
}
kelas = ["Hachi", "Yuki", "Yukino", "Yui", "Abel", "Kato"];
console.log(friend(kelas));
