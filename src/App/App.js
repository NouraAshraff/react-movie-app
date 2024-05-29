// import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import MoviesPage from "../pages/MoviesPage";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import "bootstrap/dist/css/bootstrap.css"

import MovieDetails from "../pages/MovieDetails";
import Header from "../components/Header";
import Contact from "../pages/Contact";
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
            <Route path="movies" element={<MoviesPage></MoviesPage>}></Route>
            <Route path="movies/add" element={<></>}></Route>
            <Route path="movies/:id" element={<MovieDetails></MovieDetails>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
