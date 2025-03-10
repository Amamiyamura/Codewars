// Square number or perfect square
// Given an integral number, determine if it's a square number:
// Output:
// -1: Negative numbers cannot be square numbers
// 0 is a square number (0 * 0)
// "3 is not a square number"

// let isSquare = function(n){
//     if (n < 0) {
//         return false, `${n}: Negative numbers cannot be square numbers`;
//     } else {
//         let a = Math.sqrt(n);
//         if (a === 0) {
//             return true, `${n} is a square number`;
//         } else if (a % 1 === 0) {
//             return true, `${n} is a square number`;
//         } else if (a % 1 !== 0) {
//             return false, `${n} is not a square number`
//         }
//     }
// }

// salahku ternyata output yang diharapin cuma true sama false wkwkwk
// let isSquare = function(n) {
//     if (n < 0) {
//         return false;
//     } else {
//         let a = Math.sqrt(n);
//         if (a === 0) {
//             return true;
//         } else if (a % 1 === 0) {
//             return true;
//         } else if (a % 1 !== 0) {
//             return false;
//         }
//     }
// }

// ini best practicenya
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;  // Return akan bernilai true jika akar dari n yang dimodulus 1 === 0; contoh kalo 4 kan akarnya 2 terus dimod 1 hasilnya 0 maka true, terus kalo akar dari 5 pasti kan 2,.. dimod 1 ngga dapat 0 maka false
  }

console.log(isSquare(-1));
