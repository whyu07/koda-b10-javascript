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
        console.log('hasil yg benar bukan angka');
    }
} 
console.log(hitung(50, 'luas'));
 
//Function Pure
function hitung2() {
    let hasil;  
    let r = 5;
    let kondisi = 'keliling';
    if (kondisi === 'luas') {
        let hasilLuas = 3.14 * r * r;
        hasil = hasilLuas;
        console.log(hasil);
    } else if (kondisi === 'keliling') {
        let keliling = 2 * 3.14 * r;
        hasil = keliling;
        console.log(hasil);
    } else {
        console.log('hasil yg benar bukan angka');
    }
}
hitung2();
