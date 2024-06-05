import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"

import favMoviesReducer from "./slices/favMoviesSlice";
import moviesReducer from "./slices/moviesSlice"
const store =configureStore({
    reducer:{
       
        counter:counterReducer,
       
        favMovies :favMoviesReducer,
        movies : moviesReducer

    }
})
export default store;



// state={
//     language:{language:"en"},
//     counter:{counter:0},
    //   users :{users:[]}
// }