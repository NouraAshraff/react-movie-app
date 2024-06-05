import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMoviesAction } from '../redux/store/slices/moviesSlice';
import Movie from './Movie';
import SimpleBackdrop from './Spinner';

const Movies = () => {
  const moviesArr = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesAction());
  }, [dispatch]);

  if (!moviesArr) {
    return <SimpleBackdrop />;
  }

  return (
    <div className='d-flex justify-content-around flex-wrap m-3 p-3'>
      {moviesArr.map((m) => (
        <Movie key={m.id} movie={m} isFavourit={m.isFavourit} />
      ))}
    </div>
  );
}

export default Movies;
