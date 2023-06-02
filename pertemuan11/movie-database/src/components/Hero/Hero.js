/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";

const Hero = () => {
    const [movie, setMovie] = useState(null);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres_ids ? movie.genres_ids.map(genre => genre.name).join(", ") : "";


    // Mendapatkan 1 data dari trending movie
    useEffect(() => {
        async function getTrendingMovies() {
            const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
            const responses = await axios(URL);
            return responses.data.results[Math.floor(Math.random() * 20)];
        }
        getTrendingMovies().then((movieData) => setMovie(movieData));
    }, []);

    // Mendapatkan detail movie
    async function getDetailMovie() {
        if (movie && movie.id) {
        const id = movie.id;
        const URL = `https://api.themoviedb.org/3/movies/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);
        console.log(response)
        setMovie(response.data);
        }
    }

    useEffect(() => {
        getDetailMovie();
    }, [movie]);

    
    return (
        <HeroStyled>
        <section>
            <div className="hero_left">
                <h2>{movie && movie.title}</h2>
                <h3>Genre:{genres} </h3>
                <p>{movie && movie.overview}</p>
                <Button variant="secondary" size="md" as="a"  target='_blank' >
                    Watch
                </Button>
            </div>
            <div className="hero_right">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie && movie.poster_path}`}
                    alt={movie && movie.title}
                ></img>
            </div>
        </section>
        </HeroStyled>
    );
    };

export default Hero;
