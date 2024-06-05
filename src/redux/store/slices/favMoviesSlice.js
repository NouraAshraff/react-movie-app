import { createSlice } from "@reduxjs/toolkit";


const favMoviesSlice=createSlice({
    name:"favMovies",
    initialState:{favMovies:[]},
    reducers:{
        AddMovieToFav:function(state,action){
                state.favMovies.push(action.payload);
        },
        DeleteMovieFromFav:function(state,action){           
            state.favMovies = state.favMovies.filter(movie => movie.id !== action.payload.id);
            console.log("id delete" , state.favMovies)
               
        }
    }
})

export const {AddMovieToFav , DeleteMovieFromFav} =favMoviesSlice.actions  
export default favMoviesSlice.reducer;


