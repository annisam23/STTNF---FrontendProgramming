/**
 *  Rest parameters
 *  penulisan nya menggunakan ...
 * input menjadi array
 */

function sum(...numbers){
    let hasil=0; //1,3,6,10,15

    for(let i=0;i < numbers.length;i++){
        hasil = hasil + numbers[i];
        /**
         * hasil = hasil + numbers[i]
         * hasil = 0 + 1  --> 1
         * hasil = 1 + 2 --> 3
         * hasil = 3 + 3  --> 6
         * hasil = 6 + 4  --> 10
         * hasil = 10 + 5 --> 15 adalah hasil akhir
         */
    }
    console.log(hasil);
}

sum(1,2,3,4,5);

