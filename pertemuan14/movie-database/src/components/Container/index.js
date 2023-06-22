import styles from "./index.module.css"

/**
 * 
 * Membuat Component Container
 * Menggunakan teknik Composition : Children
 */
function Container(props){
    return(
        <div className={styles.container}>{props.children}</div>
    )
}
export default Container;