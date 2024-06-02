import React from 'react';
import Movies from '../components/Movies';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
  

  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  );
}

export default Home;
