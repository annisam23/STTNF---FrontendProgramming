/**
 * Array 
 * nilai disimpan dalam bentuk ordered
 * index di array dimulai dari 0
 * non primitive yang artinya dapat menyimpan banyak nilai
 * 
 */

const animal = ["Kucing","Anjing","Ikan"];
console.log(animal[0]);

//untuk menampilkan data yang didalam array
for (let i = 1;i < animal.length;i++){
    console.log(`Hewan ${animal[i]}`);
}