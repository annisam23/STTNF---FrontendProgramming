import {createSlice} from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

const moviesSlice = createSlice({
    name :"Movies slice",
    initialState : {
        movies: data
    },
    reducers:{
        addMovie(state,action) {
            state.movies.push(action.payload);
        },
    },
})

//generate action and reducers
const {addMovie} = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export {addMovie};
export default moviesReducer;