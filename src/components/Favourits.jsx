import React from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie';
import EmptyFavourite from './EmptyFavourite';

const Favourits = () => {
  const favMovies = useSelector((state) => state.favMovies.favMovies);
  
  
  if (!favMovies || favMovies.length ===0) {
    console.log("empty arr");
    return <EmptyFavourite/> ;
  }

  return (
    <div className='d-flex justify-content-around flex-wrap m-2 p-3'>
      {favMovies.map((m) => (
        <Movie key={m.id} movie={m} fromFavourite={true} isFavourit={m.isFavourit} />
      ))}
    </div>
  );
}

export default Favourits;
