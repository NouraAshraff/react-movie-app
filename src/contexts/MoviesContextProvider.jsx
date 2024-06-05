import React, { createContext, useCallback, useMemo, useState ,useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SimpleBackdrop from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { moviesAction } from '../redux/store/slices/moviesSlice';

export const MoviesContext=createContext();
const MoviesContextProvider = ({children}) => {


// const moviesArr= useSelector((state)=>state.movies.movies)
//    const dispatch=useDispatch()
    // const moviesArr=useLoaderData();

    // useEffect(()=>{
    //     console.log("in use effect in redux movies");
    //     dispatch(moviesAction)
    // },[dispatch])
    // if(!moviesArr){
    //     return <SimpleBackdrop></SimpleBackdrop>;
    // }
    // console.log("in context" ,moviesArr);

    
    return (
        // <MoviesContext.Provider value={{moviesArr}}>
        <MoviesContext.Provider value={{}}>
            {children}
        </MoviesContext.Provider>
            
        
    );
}

export default MoviesContextProvider;
