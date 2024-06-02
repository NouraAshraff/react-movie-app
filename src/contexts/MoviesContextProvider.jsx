import React, { createContext, useCallback, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SimpleBackdrop from '../components/Spinner';

export const MoviesContext=createContext();
const MoviesContextProvider = ({children}) => {


    const moviesArr=useLoaderData();
    if(!moviesArr){
        return <SimpleBackdrop></SimpleBackdrop>;
    }
    console.log("in contest" ,moviesArr);

    
    return (
        <MoviesContext.Provider value={{moviesArr}}>
            {children}
        </MoviesContext.Provider>
            
        
    );
}

export default MoviesContextProvider;
