function hitung(r, kondisi) {
    let hasil;
    if (kondisi === 'luas') {
        let hasilLuas = Math.PI * r * r;
        hasil = hasilLuas;
        return hasil;
    } else if (kondisi === 'keliling') {
        let keliling = 2 * Math.PI * r;
        hasil = keliling;
        return hasil
    } else {
        console.log('hasil yg benar bukan angka');
    }
} 

console.log(hitung(20, 'luas'));

function hitung2() {
    let hasil; 
    let r = 5;
    let kondisi = 'keliling';
    if (kondisi === 'luas') {
        let hasilLuas = Math.PI * r * r;
        hasil = hasilLuas;
        parseInt(hasil); 
        console.log(hasil);
    } else if (kondisi === 'keliling') {
        let keliling = 2 * Math.PI * r;
        hasil = keliling;
        parseInt(hasil);
        console.log(hasil);
    } else {
        console.log('hasil yg benar bukan angka');
    }
}

hitung2();
