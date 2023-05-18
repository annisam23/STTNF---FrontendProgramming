/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
const Hero = () => {
    //Membuat state movie
    const[movie,setMovie] = useState("");

    useEffect(() => {
        //Melakukan side effect: fetch data movie(api)
        const fetchMovie = async() => { const responses = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"); 

        const data =await responses.json();
        setMovie(data)
    }
        fetchMovie();
    },[]);

    console.log(movie);
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.Title}</h2>
                    <h3 className={styles.hero__genre}>
                        {movie.Genre}
                    </h3>
                    <p className={styles.hero__description}>
                    {movie.Plot}
                    </p>
                    <button className={styles.hero__button}>Watch Now</button>
                </div>
                <div className="hero__right">
                    <img className={styles.hero__image} src={movie.Poster} alt={movie.Title}></img>
                </div>
            </section>
        </div>
    );
}
export default Hero;