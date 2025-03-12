// Masalah: buat fungsi untuk mengembalikan nilai genap jika bilangan genap dan ganjil jika bilangan ganjil
// hint: 0 termasuk genap, ini bisa negatif ataupun positif, pake modulus jika habis dibagi 2 maka genap jika ngga maka ganjil
// gap = apakah negatif bisa di modulus? bisa
// keluarannya harus Even atau Odd

function ganjilGenap (num) {
    if (num === 0) {
        return "Even";
    } else if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(ganjilGenap(21));
console.log(ganjilGenap(-21));
console.log(ganjilGenap(0));
console.log(ganjilGenap(-6));