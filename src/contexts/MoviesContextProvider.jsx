import React, { createContext, useCallback, useMemo, useState } from 'react';

export const MoviesContext=createContext()
const MoviesContextProvider = ({children}) => {
    
    
    return (
        <MoviesContext.Provider value={{}}>
            {children}
        </MoviesContext.Provider>
            
        
    );
}

export default MoviesContextProvider;
