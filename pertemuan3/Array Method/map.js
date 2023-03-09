/**
 * Array Method -> map (transform)
 * mengembalikan sebuah nilai yang sudah terformat
 * 
 * 
 * mengubah nilai array dengan awalan mr/mrs
 */

const names = ["annisa","maulida","rahma"];

const namaFormal = names.map(function(nama){
    return `Mr/Mrs ${nama}`
});

console.log(names);
console.log(namaFormal);