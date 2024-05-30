import React from 'react';
import Movies from '../components/Movies';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      
      <Movies />
      
      <Outlet />
    </div>
  );
}

export default Home;
