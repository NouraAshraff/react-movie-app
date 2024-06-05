import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyFavourite = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{

        navigate('/')
    }
    return (
        <div className="  d-flex flex-column align-items-center justify-content-center text-center p-4 bg-light rounded shadow m-5">
          <h2 className="mb-3">Your Favorite Cart is Empty</h2>
          <p className="text-muted mb-4">
            It looks like your favorite  is currently empty. Add some items to your
            favorites to see them displayed here.
          </p>
          <button onClick={handleClick} className="btn btn-primary">continue</button>
        </div>
      );
}

export default EmptyFavourite;
