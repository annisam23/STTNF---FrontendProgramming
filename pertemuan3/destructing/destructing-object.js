/**
 * destructing = unpack object atau array
 * menghindari kode yang berulang ulang
 * 
 * Destructing Object berdasarkan key.
 * Destructing Array berdasarkan urutan(index).
 */

const req = {
    body:{
        name: "Annisa",
        age:20,
        major:"informatics",
    },
}

//destructing object berdasarkan key
const {name,age,major} = req.body;
console.log(name,age,major);





