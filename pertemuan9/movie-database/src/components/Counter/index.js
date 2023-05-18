/* eslint-disable no-lone-blocks */
//import useState untuk menggunakan state.
import { useEffect, useState } from "react";

function Counter(){
    {
        /**
         * useState
         * membuat state menggunakan useState
         * memberikan nilai awal 0
         * mengemballikan sepasang value:
         * -Current state (nilai untuk saat ini)
         * - dan fungsi untuk mengupdate state
         */
    }

    //destructing Array
    const[angka,setAngka] = useState(0)

    function addAngka(){
        //update angka menggunakan setAngka
        setAngka(angka+1);
    }

    function updateDOM(){
        console.log("Lifecyle: Dimount");
        document.title = `Result: ${angka}`
    }

    //useEffect
    /**
             * useEffect dijalankan pada lifecycle mount dan update
             * Melakukan side effevt: access dom
             * mengubah title document setiap state berubah
             * untuk membatasi lifecycle update dengan
             * diberi array kosong [] maka  lifecycle yang dijalankan hanya mount saja
             */
    useEffect(updateDOM,[angka]);

    console.log("Lifecyle: Dirender") ;
    return(
        <div>
            <p>Hasil {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}
export default Counter;