import {useEffect} from "react";
import Axios from "axios"
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../features/moviesSlice";

function NowPlaying(){
    const title = "Now Playing";
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getNowPlayingMovies();
    },[])

        async function getNowPlayingMovies(){
            const responses = await Axios(ENDPOINTS.NOW_PLAYING);
            const movies = (responses.data.results);

            dispatch(updateMovies(movies))
        }

    return (
        <>
            <Hero />
            <Movies title={title}/>
        </>
    );
}


export default NowPlaying;