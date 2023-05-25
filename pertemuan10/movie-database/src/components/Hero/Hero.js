/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";
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
        <HeroStyled>

            <section>
                <div className="hero_left">
                    <h2>{movie.Title}</h2>
                    <h3> {movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button variant="secondary" size="md">Watch</Button>
                </div>
                <div className="hero_right">
                    <img src={movie.Poster} alt={movie.Title}></img>
                </div>
            </section>
        </HeroStyled>
    );
}
export default Hero;