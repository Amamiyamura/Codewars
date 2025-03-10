// Sum semua bilangan positif
// jika arr kosong return 0
function positiveSum(arr) {
  let sum = 0;      // inisialisasi var sum dengan 0
  for (i = 0; i < arr.length; i++) {    // perulangan hingga panjang array
    if (arr[i] > 0) {       // jika arr ke [i] lebih dari 0 maka tambahkan ke sum
        sum += arr[i];
    }
  } return sum;     // keluarkan sum
}
console.log(positiveSum([1,-4,7,12]))