import Axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";

function DetailMovie(){
    /**
     * TODO 1
     * Ambil Id dari parameter URL
     * Fetch detail movie by id
     */
    const {id} = useParams();
    const [movie,setMovie] = useState("");
    //const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres ? movie.genres.map(genre => genre.name).join(", ") : "";
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    useEffect(() => {
        getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getDetailMovie(){   
        //const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const response = await Axios(ENDPOINTS.DETAIL_MOVIE(id));

        setMovie(response.data)
    }
    console.log(movie)
    return(
        <StyledDetailMovie>
            <div className="poster">
                <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt=""
                />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>
                    {movie.overview}
                </p>
                <Button as="a" href={trailer}>Watch</Button>
            </div>
        </StyledDetailMovie>
    );
}
export default DetailMovie;
