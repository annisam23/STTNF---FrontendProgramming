/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className={styles.left__image}
            src="https://picsum.photos/417/374"/>
            </div>

            <div className={styles.right}>
                <h2 className={styles.right__title}>Add Movie</h2>
            <form action="#">
                <div className={styles.right_formcontrol}>
                    <label for="title" className="form__label">Title</label>
                    <input id="title" type="text" className={styles.right__inputform}></input>
                </div>
                <div className={styles.right_formcontrol}>
                <label for="year" className="form__label">Year</label>
                    <input id="year" type="text" className={styles.right__inputform}></input>
                </div>
                <button type="submit" className={styles.form__button}>Submit</button>
            </form>
            </div>   
        
        </div>
    )
}
export default AddMovieForm;