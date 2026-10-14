let r = 10;

let luas = Math.PI * r * r;
let keliling = 2 * Math.PI * r;

console.log(luas);
console.log(keliling);


// Percabangan Menghitung Luas atau Keliling

let r = 100;
let kondisi = 'luas';
let luas = Math.PI * r * r;
let keliling = 2 * Math.PI * r;

if (kondisi === 'luas') {
    hasilLuas = luas;
    hasil = hasilLuas;
} else if (kondisi === 'keliling') {
    hasilKeliling = keliling;
    hasil = hasilKeliling;
} else {
    console.log('Masukan  yang ingin di hitung')
}
console.log(hasil)
