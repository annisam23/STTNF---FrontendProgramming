/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import styles from "./FormCovid.module.css";
import Alert from "../Alert/Alert";


function FromCovid(props) {
    const {tableData,setTableData} = props;

    const[kota,setKota] = useState("");
    const[status,setStatus] = useState("")
    const[number,setNumber] = useState("")

    const [isKotaError,setIsKotaError]= useState(false);
    const [isStatusError,setIsStatusError]= useState(false);
    const [isNumberError,setIsNumberError]= useState(false);

    function handleKota(e){
        setKota(e.target.value);
    }

    function handleStatus(e){
        setStatus(e.target.value);
    }

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(kota === ""){
            setIsKotaError(true);
            return;
        }else if(status === ""){
            setIsStatusError(true);
            return;
        }else if(number === ""){
            setIsNumberError(true);
            return;
        }else{
            
        }

        
        
    setIsKotaError(false);
    setIsStatusError(false);
    setIsNumberError(false);
    }
    
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form_left}>
                    <img
                        className={styles.form_image}
                        src="https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?w=826&t=st=1680236066~exp=1680236666~hmac=36f0dff2b97daa69223445be16789559b1dd82a24c8a7ec574750dd2c74494d6" />
                </div>
                <div className={styles.form_right}>
                    <h2 className={styles.form_title}>Form Covid</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_group}>
                            <label className={styles.form_label}>Provinsi</label>
                            <select className={styles.form_select} 
                            id="kota"
                            value={kota}
                            onChange={handleKota}
                            >
                                <option value="">Pilih Kota</option>
                                {
                                    tableData.map(data => (
                                        <option  key={data.no} value={data.kota}>{data.kota}</option>
                                    ))
                                }
                            </select>
                            {
                                isKotaError && <Alert>Kota wajib diisi</Alert>
                            }
                        </div>
                        <div className={styles.form_group}>
                            <label className={styles.form_label}>Status</label>
                            <select className={styles.form_select} 
                            onChange={handleStatus}
                            id="status" 
                            name="status"
                            value={status}
                            >
                                <option value="">Pilih Status</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="meninggal">Meninggal</option>
                                <option value="dirawat">Dirawat</option>
                            </select>
                            {
                                isStatusError && <Alert>Status wajib diisi</Alert>
                            }
                        </div>
                        <div className={styles.form_group}>
                            <label className={styles.form_label}>Jumlah</label>
                            <input 
                            className={styles.form_input} 
                            onChange={handleNumber}
                            type="number" 
                            id="number" 
                            value={number} 
                            placholder="0"/>
                        {
                                isNumberError && <Alert>Jumlah wajib diisi</Alert>
                            }
                        </div>
                        <button 
                        type="submit"
                        className={styles.form_button}
                        >Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default FromCovid;