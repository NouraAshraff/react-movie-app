import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import {useDispatch, useSelector } from 'react-redux';
import { deleteMovieAction } from '../redux/store/slices/moviesSlice';
const MovieDetails = () => {
    const {id}=useParams()
    const dispatch = useDispatch();
    let [movie , setmovie]=useState({});
    
    const navigate = useNavigate();
    

    const moviesArr= useSelector((state)=>state.movies.movies)


    useEffect(() => {
        setmovie(moviesArr.find((m)=>m.id === id));
    }, [id, moviesArr])



        const baseURL = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;

        const movieStyle = {
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"
        };

        const imageStyle = {
            borderRadius: '5px',
            marginBottom: 10,
            boxShadow: "0 0px 10px rgba(0, 0, 0, 0.1)",

        };

        const titleStyle = {
            fontWeight: 'bold',
           
            
            color: '#4D869C'
        };

        const overviewStyle = {
            color: '#4D869C',
            textAlign: 'center',
            maxWidth: '80%',
        };
        const handleUpdate = () => {
            navigate(`/movies/update/${id}`);
        }
        const handleDelete = async () => {
            let res = window.confirm("Are you sure you want to delete?");
            if (res) {
                dispatch(deleteMovieAction(movie));
            }
            navigate('/');
        }
        return (

            <div className='container m-auto mt-2  d-flex flex-column align-items-center p-2 w-50 '  style={movieStyle}>
                <h3  className =" m-3"style={titleStyle}>{movie.title}</h3>
                <img className='center w-75 h-50' src={baseURL} alt="" style={imageStyle} />
                <p  style={overviewStyle}>Popularity : {movie.popularity}</p>
                <p  style={overviewStyle}>Vote Average : {movie.vote_average}</p>
                <p  style={overviewStyle}>{movie.overview}</p>
                <div className='d-flex p-2 m-3'>

                <button  className='btn btn-primary m-2'  onClick={handleUpdate}>Update</button>
                <button  className='btn btn-danger m-2' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        );
}

export default MovieDetails;
