import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import MoviesPage from "../pages/MoviesPage";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import "bootstrap/dist/css/bootstrap.css";
import MovieDetails from "../pages/MovieDetails";
import Header from "../components/Header";
import AddMovie from "../components/AddMovie";
import Contact from "../pages/Contact";
import UpdateMovie from "../components/UpdateMovie";
import MoviesContextProvider from "../contexts/MoviesContextProvider";
import { Suspense } from "react";
import SimpleBackdrop from "../components/Spinner";

function App() {
  return (
    <MoviesContextProvider>
      <Suspense fallback={<SimpleBackdrop />}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/add" element={<AddMovie />} />
            <Route path="movies/:id" element={<MovieDetails />} />
            <Route path="movies/update/:id" element={<UpdateMovie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </MoviesContextProvider>
  );
}

export default App;
