/**
 * Array method - find (searching)
 * Balikin satu data
 */

const users = [
    {
        nama:"Hannah",
        age:10
    },
    {
        nama:"Annisa",
        age:20
    },{
        nama:"Ica",
        age:30
    },{
        nama:"Michael",
        age:40
    },{
        nama:"Rahma",
        age:50
    }
]
const userDewasa = users.find(function(user){
    return user.age > 21;
})

console.log(userDewasa);