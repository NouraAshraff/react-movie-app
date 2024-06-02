import React, { useContext } from 'react';

import Movie from './Movie';
import { MoviesContext } from '../contexts/MoviesContextProvider';

const Movies = () => {

    const {moviesArr}= useContext(MoviesContext)

    return (
        <div className='d-flex justify-content-around flex-wrap m-2 p-3'>
            {moviesArr.map((m) => { return <Movie key={m.id} movie={m}></Movie> })}
        </div>
    );
}

export default Movies;
