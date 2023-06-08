import {useEffect,useState} from "react";
import Axios from "axios"
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";

function Popular(){
    // membuat state movies
    const [movies, setMovies] = useState([]);
    const title = "Popular"
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function getPopularMovies(){
            const responses = await Axios(ENDPOINTS.POPULAR);
            // simpan data ke state movie
            setMovies(responses.data.results);
        }
        getPopularMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title={title}/>
        </>
    );
}

export default Popular;