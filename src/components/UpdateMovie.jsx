import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({ title: "", overview: "", popularity: 0, vote_average: 0 });
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (id) {
            // Fetch the movie details for updating
            axios.get(`http://localhost:3000/movies/${id}`)
                .then((res) => {
                    setMovie(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching movie details: ", err);
                    setMessage("Error fetching movie details.");
                });
        }
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id) {
                // Update existing movie
                await axios.put(`http://localhost:3000/movies/${id}`, movie);
                setMessage("Movie updated successfully.");
            } else {
                // Add new movie
                movie.release_date = new Date().toISOString();
                movie.poster_path = '/ldfCF9RhR40mppkzmftxapaHeTo.jpg';
                await axios.post(`http://localhost:3000/movies`, movie);
                setMessage("Movie added successfully.");
            }
            navigate("/");
        } catch (err) {
            console.error("Error saving movie: ", err);
            setMessage("Error saving movie.");
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie((oldMovie) => ({ ...oldMovie, [name]: value }));
    };
    const handleDiscard = () => {
        navigate('/');

    }

    return (
        <div className="container m-auto mb-3 mt-2 p-3 border rounded">
            <h2 className="text-primary text-center">{id ? "Update Movie" : "Add Movie"}</h2>
            {message && <p className="text-center">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Name : </label>
                    <input className="form-control w-50" type='text' name="title" value={movie.title} onChange={handleChange} required></input>
                </div>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Overview : </label>
                    <input className="form-control w-50" type='text' name="overview" value={movie.overview} onChange={handleChange} required></input>
                </div>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Vote : </label>
                    <input className="form-control w-50" type='number' name="vote_average" value={movie.vote_average} onChange={handleChange} required></input>
                </div>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Movie Popularity : </label>
                    <input className="form-control w-50" type='number' name="popularity" value={movie.popularity} onChange={handleChange} required></input>
                </div>
                <div className=" w-50 d-flex  m-auto ">

                    <input className="btn btn-primary mx-auto p-2 w-25" type='submit' value="Save Changes"></input>
                    <button className="btn btn-secondary mx-auto p-2 w-25" onClick={handleDiscard}>Discard</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateMovie;
