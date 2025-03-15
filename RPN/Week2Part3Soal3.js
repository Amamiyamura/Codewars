// Masalah: Menentukan apakah array merupakan deret aritmatika atau bukan
// Hint: deret aritmatika adalah bilangan bilangan yang memiliki selisih yang sama
// split masalah:
// selisih yang sama pada setiap indeks, maka berarti kita harus membandingkan setiap selisih yang ada pada array
// kemudian jika semua selisih pada array sama maka return true


// arr = [1,2,3,4,5,6];
// let selisih = [];
// let beda = false;
// for (let i = 0; i < arr.length -1; i++){        // loop untuk mendapatkan selisih setiap indeks (karena perbandingan maka arr.length -1)
//     selisih.push(arr[i+1] - arr[i]);        // selisih didapatkan dari nilai indeks selanjutnya dikurang nilai indeks sekarang
// }
// for (let j = 0; j < selisih.length -1; j++){        // loop untuk membandingkan setiap selisih yang ada pada array
//     if (selisih[j] !== selisih[j+1]){
//        beda = true;
//        break;
//     }
// }
// if (!beda){
//     console.log("true");
// }

//

// Masalah: Menentukan apakah array merupakan deret aritmatika atau bukan
// Hint: deret aritmatika adalah bilangan bilangan yang memiliki selisih yang sama
// split masalah:
// selisih yang sama pada setiap indeks, maka berarti kita harus membandingkan setiap selisih yang ada pada array
// kemudian jika semua selisih pada array sama maka return true

function tentukanDeretAritmatika(arr) {
    let selisih = [];
    let sama = true;
    for (let i = 0; i < arr.length - 1; i++) {
        selisih.push(arr[i+1] - arr[i]);
        for (let j = 0; j < selisih.length - 1; j++) {
            if (selisih[j] !== selisih[j+1]) {
                sama = false;
            }
        } 
    } return sama;
  }
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true