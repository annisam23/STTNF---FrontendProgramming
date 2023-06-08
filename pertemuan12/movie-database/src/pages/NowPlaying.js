import {useEffect,useState} from "react";
import Axios from "axios"
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";

function NowPlaying(){
    // membuat state movies
    const [movies, setMovies] = useState([]);
    const title = "Now Playing";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function getNowPlayingMovies(){
            const responses = await Axios(ENDPOINTS.NOW_PLAYING);
            // simpan data ke state movie
            setMovies(responses.data.results);
        }
        getNowPlayingMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Hero />
            <Movies movies={movies} title={title}/>
        </>
    );
}


export default NowPlaying;