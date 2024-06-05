import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMoviesAction = createAsyncThunk("movies/getAllMovies", async () => {
    const res = await axios.get("http://localhost:3000/movies");
    return res.data;
});

export const addMovieAction = createAsyncThunk(
    "movies/addMovie",
    async (movie) => {
        const res = await axios.post("http://localhost:3000/movies", movie);
        return res.data;
    }
);

export const deleteMovieAction = createAsyncThunk(
    "movies/deleteMovie",
    async (movie) => {
        const response = await axios.delete(
            `http://localhost:3000/movies/${movie.id}`
        );
        return response.data;
    }
);

export const UpdateMovieAction = createAsyncThunk(
    "movies/updateMovie",
    async (movie) => {
        const response = await axios.put(
            `http://localhost:3000/movies/${movie.id}`, movie
        );
        return response.data;
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [] },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMoviesAction.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(getAllMoviesAction.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(addMovieAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(addMovieAction.fulfilled, (state, action) => {
                state.loading = false;
                state.movies.push(action.payload);
                state.response = "add";
            })
            .addCase(addMovieAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteMovieAction.fulfilled, (state, action) => {
                state.movies = state.movies.filter(
                    (m) => m.id !== action.payload.id
                );
                state.response = "delete";
            })
            .addCase(UpdateMovieAction.fulfilled, (state, action) => {
                const updatedMovie = action.payload;
                const index = state.movies.findIndex(
                    (m) => m.id === updatedMovie.id
                );
                if (index !== -1) {
                    state.movies[index] = updatedMovie;
                }
                state.response = "update";
            });
    }
});

export default moviesSlice.reducer;
