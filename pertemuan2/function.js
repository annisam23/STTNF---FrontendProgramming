/**
 * FUNCTION
 * sekumpulan kode untuk menjalankan tugas tertentu
 * dapat mengembalikan nilai
 * jika tidak memiliki parameter maka nilainya menjadi default
 */

//ekspression function
const hitungUmur =  (tahunLahir) =>  {
    const umur = 2023 -tahunLahir;
    return umur;
}

console.log(hitungUmur(2002));

// function hitungBMI
function hitungBmi(berat,tinggi) {
    const tinggidiBagi = tinggi/100;
    const bmi = berat / (tinggidiBagi*tinggidiBagi);
    return bmi;
}

console.log(hitungBmi(50,163));