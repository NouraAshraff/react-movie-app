import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Movie from './Movie';

import { useLoaderData } from 'react-router-dom';

const Movies = () => {
    // const moviesArr=useLoaderData();

    const [moviesArr, setMoviesArr] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/movies")
            .then((res) => {
                setMoviesArr(res.data)
                // console.log(res.data);
            })
    }, [])


    console.log(moviesArr);
    return (
        <div className='d-flex justify-content-around flex-wrap m-2 p-3'>
            {moviesArr.map((m) => { return <Movie key={m.id} movie={m}></Movie> })}
        </div>
    );
}

export default Movies;
