import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import axios from 'axios';
const MovieDetails = () => {
    const {id}=useParams()
    const [movie , setmovie]=useState({});
    console.log("the id is " +id);



    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                console.log(res.data);
                setmovie(res.data)
            })
    }, [])

        const baseURL = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;

        const movieStyle = {
            backgroundColor: "#EEF7FF", 
            margin: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: '60%',
            width: '700px', 
            alignItems: "center",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        };

        const imageStyle = {
            width: '500px',
            height: '400px',
            borderRadius: '5px',
            marginBottom: 10,
            boxShadow: "0 0px 10px rgba(0, 0, 0, 0.1)"

        };

        const titleStyle = {
            fontWeight: 'bold',
            fontSize: '18px',
            margin: '10px 0',
            color: '#4D869C'
        };

        const overviewStyle = {
            color: '#4D869C',
            textAlign: 'center',
            maxWidth: '80%',
        };
        return (
          
           
            <div style={movieStyle}>
                <img src={baseURL} alt="" style={imageStyle} />
                <p style={titleStyle}>{movie.original_title}</p>
                <p style={overviewStyle}>{movie.overview}</p>
            </div>
        );
}

export default MovieDetails;
