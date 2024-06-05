import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addMovieAction } from "../redux/store/slices/moviesSlice";

const AddMovie = () => {
    const [movie, setMovie] = useState({ title: "", overview: "", popularity: 0, vote_average: 0, release_date: ""});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const handleSubmit = async (event) => {

        event.preventDefault();
        movie.isFavourit =false ;
        movie.release_date = new Date().toISOString().split('T')[0];  // Ensure the date format is suitable for your backend
        movie.backdrop_path = 'https://image.tmdb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg'; // Dummy path, adjust as needed

        dispatch(addMovieAction(movie));
        navigate(`/`);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie((oldMovie) => ({ ...oldMovie, [name]: value }));
    };
    const handleCancel = ()=>{
        navigate('/')
    }

    return (
        <div className="container m-auto mb-3  mt-5 p-3 border rounded w-75 ">
            <h2 className="text-primary text-center"> Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Name : </label>
                    <input className="form-control w-50" type='text' name="title" value={movie.title} onChange={handleChange}></input>
                </div>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Overview : </label>
                    <input className="form-control w-50" type='text' name="overview" value={movie.overview} onChange={handleChange}></input>
                </div>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Vote : </label>
                    <input className="form-control w-50" type='number' name="vote_average" value={movie.vote_average} onChange={handleChange}></input>
                </div>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Popularity : </label>
                    <input className="form-control w-50" type='number' name="popularity" value={movie.popularity} onChange={handleChange}></input>
                </div>
                <div className=" w-50 d-flex  m-auto ">
                    <input className="btn btn-primary mx-auto p-2 w-25" type='submit' value="Add"></input>
                    <button className="btn btn-secondary mx-auto p-2 w-25" onClick={handleCancel}>Cancel</button>

                </div>

                
            </form>
        </div>
    );
};

export default AddMovie;
