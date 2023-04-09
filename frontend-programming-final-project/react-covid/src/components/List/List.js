/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./List.module.css";

const List = () =>{
    return(
        <div>
            <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}><a href="#">Global</a></li>
                        <li className={styles.navbar__item}><a href="#">Indonesia</a></li>
                        <li className={styles.navbar__item}><a href="#">Provinsi</a></li>
                        <li className={styles.navbar__item}><a href="#">About</a></li>
                    </ul>
        </div>
    )
}
export default List;