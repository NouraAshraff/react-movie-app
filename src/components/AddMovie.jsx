import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const [movie, setMovie] = useState({ title: "", overview: "", popularity: 0, vote_average: 0, release_date: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {


        event.preventDefault();
        movie.release_date = new Date().toISOString().split('T')[0];  // Ensure the date format is suitable for your backend
        movie.backdrop_path = 'https://image.tmdb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg'; // Dummy path, adjust as needed

        try {
            const response = await axios.post("http://localhost:3000/movies", movie);
            if (response.status === 201) {
                setMessage("Movie added successfully!");
                setMovie({ title: "", overview: "", popularity: 0, vote_average: 0, release_date: "" });
                // navigate(`/`);

            }
        } catch (error) {
            console.error("There was an error adding the movie!", error);
            setMessage("Failed to add the movie.");
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie((oldMovie) => ({ ...oldMovie, [name]: value }));
    };
    const handleCancel = ()=>{
        navigate('/')
    }

    return (
        <div className="container m-auto mb-3  mt-2 p-3 border rounded w-75 ">
            <h2 className="text-primary text-center"> Add Movie</h2>
            {message && <p className="text-center text-success">{message}</p>}
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
                <div className=" w-25 d-flex  m-auto ">
                    <input className="btn btn-primary mx-auto p-2 w-25" type='submit' value="Add"></input>
                    <button className="btn btn-secondary mx-auto p-2 w-25" onClick={handleCancel}>Cancel</button>

                </div>

                
            </form>
        </div>
    );
};

export default AddMovie;
