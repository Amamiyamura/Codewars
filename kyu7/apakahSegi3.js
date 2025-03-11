// Masalah: Membuat fungsi yang dapat memberikan nilai true jika input dapat membuat sebuah segi3 dab false jika tidak
// Hint:
// Segitiga berarti inputnya tidak boleh 0
// Syarat segi 3 terbentuk adalah jika sisi terbesar < sisi*sisi lainnya
// split masalah:
// Untuk awalnya kita perlu mencari sisi dengan nilai terbesar caranya adalah gunakan Math.max(a, b, c)
// kemudian lakukan pengkondisian

a = 5;
b = 4;
c = 3;

function isTriangle(a,b,c) {
    if (a <= 0 || b <= 0 || c <= 0){
        return false;
    }
    besar = Math.max(a,b,c);
    if (besar === a) {
        if (a > b + c) {
            return false;
        } else {
            return true;
        }
    } else if (besar === b) {
        if (b > a + c) {
            return false;
        } else {
            return true;
        }
    } else if (besar === c) {
        if (c > a + b) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(isTriangle(a,b,c));

// ngga bisa pake if else redundant katanya
// ini best practice
function isTriangle(a, b, c) {
    return a > 0 && b > 0 && c > 0 && (a + b > c && a + c > b && b + c > a);
}
