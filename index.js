// Function Impure
function hitung(r, kondisi) {
    let hasil;
    

    if (kondisi === 'luas') {
        let hasilLuas = 3.14 * r * r;
        hasil = hasilLuas;
        return hasil;
    } else if (kondisi === 'keliling') {
        let keliling = 2 * 3.14 * r;
        hasil = keliling;
        return hasil
    } else {
        console.log('Tulis angka');
    }
} 
console.log(parseInt(hitung(50, 'keliling')));
 
//Function Pure
function hitung2() {
    let hasil;  
    let r = 50;
    let kondisi = 'keliling';
    if (kondisi === 'luas') {
        let hasilLuas = 3.14 * r * r;
        hasil = hasilLuas;
        console.log(parseInt(hasil));
    } else if (kondisi === 'keliling') {
        let keliling = 2 * 3.14 * r;
        hasil = keliling;
        console.log(parseInt(hasil));
    } else {
        console.log('Tulis angka');
    }
}
hitung2();
