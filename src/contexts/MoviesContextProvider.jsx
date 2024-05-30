import React, { createContext, useCallback, useMemo, useState } from 'react';
import {v4 as uuid} from "uuid"

export const MoviesContext=createContext()
const MoviesContextProvider = ({children}) => {
    
    return (
        <MoviesContext.Provider value={{}}>
            {children}
        </MoviesContext.Provider>
            
        
    );
}

export default MoviesContextProvider;
