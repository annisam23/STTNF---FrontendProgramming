/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";

const Hero = () => {
    const [movie, setMovie] = useState(null);
    //const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres ? movie.genres.map(genre => genre.name).join(", ") : "";
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    // Mendapatkan 1 data dari trending movie
        async function getTrendingMovies() {
            const responses = await axios(ENDPOINTS.TRENDING);
            return responses.data.results[Math.floor(Math.random() * 20)];
        }

    // Mendapatkan detail movie
    async function getDetailMovie() {
        const trendingMovie = await getTrendingMovies()
        const id = trendingMovie.id;
        //const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(ENDPOINTS.DETAIL_MOVIE_HERO(id));
        console.log(response)
        setMovie(response.data);
    }

    useEffect(() => {
        getDetailMovie();
    }, []);

    
    return (
        <HeroStyled>
        <section>
            <div className="hero_left">
                <h2>{movie && movie.title}</h2>
                <h3>Genre:{genres} </h3>
                <p>{movie && movie.overview}</p>
                <Button variant="secondary" size="lg" as="a"  target='_blank' href={trailer}>
                    Watch
                </Button>
            </div>
            <div className="hero_right">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie && movie.backdrop_path}`}
                    alt={movie && movie.title}
                ></img>
            </div>
        </section>
        </HeroStyled>
    );
    };

export default Hero;
