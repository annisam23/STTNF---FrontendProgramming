/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";
const Hero = () => {
    //Membuat state movie
    const[movie,setMovie] = useState("");
        /**useEffect(() => {
        //Melakukan side effect: fetch data movie(api)
        const fetchMovie = async() => { const responses = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"); 

        const data =await responses.json();
        setMovie(data)
    }
        fetchMovie();
    },[]);

    console.log(movie);
    **/
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;   

    //mendapatkan 1 data dari trending movie
    useEffect(() => {
        async function getTrendingMovies(){
            const responses = await axios(URL);
            console.log(responses.data.results[0])
            return responses.data.results[0];
        }
        getTrendingMovies();
    }, []);


    // mendapat detail movie
    async function getDetailMovie(){
        const trendingMovie = await getTrendingMovies();
        const id = trendingMovie.id;

        const URL = `https://api.themoviedb.org/3/movies/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const responses = await axios(URL);
        
        setMovie(responses.data)
    }
    useEffect(() => {
        getDetailMovie();
    }, []);

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