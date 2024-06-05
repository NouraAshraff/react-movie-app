import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import MovieDetails from "../pages/MovieDetails";
import AddMovie from "../components/AddMovie";
import Contact from "../pages/Contact";
import UpdateMovie from "../components/UpdateMovie";
import { Suspense } from "react";
import SimpleBackdrop from "../components/Spinner";
import Favourits from "../components/Favourits";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Movies from '../components/Movies';
import { Provider } from 'react-redux';

import store from "../redux/store/store"
import EmptyFavourite from '../components/EmptyFavourite';
// const fetchMovies = async () => {
//     const res = await axios.get("http://localhost:3000/movies");
//     return res.data;
// };

const router = createBrowserRouter([
    {
        path: '/',
        // loader: fetchMovies,
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element:<Movies/>,
              
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/favourits",
                element: <Favourits/>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/movies/add",
                element: <AddMovie />,
            },
            {
                path: "movies/:id",
                element: <MovieDetails />,
            },
            {
                path: "movies/update/:id",
                element: <UpdateMovie />,
            },
            {
                path: "movies/emptyFav",
                element: <EmptyFavourite/>,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<SimpleBackdrop />}>
                <RouterProvider router={router} />
            </Suspense>
        </Provider>
    );
}

export default App;
