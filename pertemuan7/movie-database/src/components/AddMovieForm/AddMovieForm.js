/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Alert/Alert";
const AddMovieForm = (props) => {
    const{movies,setMovies} = props;


    //membuat state title
    //diisi dengan string kosong
    const[title,setTitle]=useState("");
    const [isTitleError,setIsTitleError]= useState(false);

    //membuat state data
    const[date,setDate] = useState("");
    const[isDateError,setIsDateError]= useState(false);

    const[gambar,setGambar] = useState("")
    const[isGambarError,setIsGambarError] = useState(false);

    const[genre,setGenre] = useState("")
    const[isGenreError,setIsGenreError] = useState(false);
    //buat function handleTitle
    const handleTitle = (e)=> {
        setTitle(e.target.value)
    }

    //buat function handle date
    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleGambar = (e) => {
        setGambar(e.target.value)
    }

    const handleGenre = (e) => {
        setGenre(e.target.value)
    }
    //buat function handle submit
    const handleSubmit = (e) =>{
        //mencegah perilaku default
        //mencegah form direfresh ketika disubmit
        e.preventDefault();

        if(title === ""){
            setIsTitleError(true);
            return;
        }else if(date === ""){
            setIsDateError(true);
            return;
        }else if(gambar === ""){
            setIsGambarError(true);
            return;
        }else if(genre === ""){
            setIsGenreError(true);
        }

        //siapkan movie yang ingin diinput
        const movie = {
            id:nanoid(),
            title:title,
            year:date,
            type:genre,
            poster:gambar
        }

        
        setMovies([...movies,movie]);

        setIsTitleError(false);
        setIsDateError(false);
        setIsGambarError(false);
        setIsGenreError(false);
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                    className={styles.form__image}
                    src="https://picsum.photos/536/354"
                    alt=""
                    />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Title 
                            </label>
                            <input
                            //memberikan event onChange
                            onChange={handleTitle}
                            className = {styles.form__input}
                            type="text" 
                            name="title" 
                            //memberikan value input : title
                            value={title}>
                            </input>
                            {isTitleError ? <Alert>Title wajib diisi</Alert> : ""}
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Date 
                            </label>
                            <input
                            onChange={handleDate}
                            className = {styles.form__input}
                            type="number" 
                            id="date"
                            value={date}/>
                            {isDateError? <Alert> Date wajib diisi</Alert>: ""}
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Gambar 
                            </label>
                            <input
                            onChange={handleGambar}
                            className = {styles.form__input}
                            type="text" 
                            id="gambar"
                            value={gambar}/>
                            {isGambarError? <Alert> Gambar wajib diisi</Alert>: ""}
                        </div>

                        <div className={styles.form__group}>
                        <label className={styles.form__label}>
                                Genre
                            </label>
                                <select  
                            onChange={handleGenre}
                            className = {styles.form__input}
                            name="genre" 
                            id="genre"
                            value={genre}>
                                    <option value="">Pilih salah satu</option>
                                    <opton value="action">Action</opton>
                                    <option value="comedy">Comedy</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="horror">Horror</option>
                                    <option value="romance">Romance</option>
                                    <option value="thriller">Thriller</option>
                                </select>
                                {isGenreError? <Alert> Gambar wajib diisi</Alert>: ""}
                        </div>

                        <div>
                            <button className={styles.form__button}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddMovieForm;