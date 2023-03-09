/**
 * Spread Syntax --> disebarkan nilainya
 * adalah memisahkan array menjaadi nilai tersendiri 
 * kegunaan : copy dan merge array ke variabel baru
 * menggunakan keyword ...
 * dapat digunakan untuk object dan array
 * kebalikan dari Rest Parameter
 */

const family = ["Michael","Hannah"];

//spreadSyntax
//copy array family
const newFamily = [...family,"Jones","martha"];
console.log(newFamily);

//jika mencetak spread syntax nya maka bentuknya bukan array lagi
console.log(...family);


//object
const user = {
    nama : "nisa",
    major :"informatics"
}

const addAge = {
    ...user,
    age:20,
}

console.log(addAge);
