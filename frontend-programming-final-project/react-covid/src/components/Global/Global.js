/* eslint-disable jsx-a11y/heading-has-content */
import Covid from "../Covid/Covid";
import styles from "./Global.module.css";
import data from"../../utils/constants/indonesia"

function Global(){
    const dataCovid = data;
    return(
        <div className={styles.container}>
            <section className={styles.global}>
                <h2 className={styles.global_title}>Indonesia</h2>
                <h4 className={styles.global_desc}>Data Covid Berdasarkan Global</h4>
                <div className={styles.covid_container}>
                    {
                    dataCovid.map(function (covid){
                        return <Covid covid={covid} key={covid.status}/>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Global;