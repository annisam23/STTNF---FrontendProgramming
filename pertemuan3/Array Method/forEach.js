/**
 * array method untuk mempermudah pengelolaan data
 * Array method -> foreach (iterate)
 */

const names = ["annisa","maulida","rahma"];

//method foreach untuk looping array 
//input memakai function bukan nilai string
//function callback tidak perlu penamaan
//function dijalankan untuk array tertuju
names.forEach(function(name){
    console.log(name);
})

//cara 2
const callbackforEach= function(name){
    console.log(name);
}

names.forEach(callbackforEach);

