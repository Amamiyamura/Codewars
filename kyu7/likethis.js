// Seingetku soal yang ada perkenalan tentang likes di fb gitu aku lupa

let nama = ["Abel", "Bell", "Cranel"];
function likes(names) {
    if (names.length < 1) {
        return "no one likes this";
    } else if(names.length === 1) {
        return `${names[0]} likes this`;
    } else if(names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if(names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
    }
  }

console.log(likes(nama));