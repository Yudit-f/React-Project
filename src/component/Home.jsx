import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContactUs from './ContactUs'
import Cart from './Cart'
import AboutUs from './AboutUs'
import MyOrder from './MyOrder'
import Products from './Products'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="my-background">
      
      <div className='Hometext'>
        <h1>Welcome to the World of Sushi!</h1>
        <p>
          Here you will find the perfect blend of Japanese tradition and modern flavors, 
          with an emphasis on freshness, quality, and artistic precision. Our sushi is 
          lovingly sliced and passionately served to provide you with a unique culinary experience – 
          whether you are a fan of sophisticated sashimi or excited to discover new rolls. 
          So sit back, order your favorite dish, and let us take you on a magical flavor journey.
        </p>
      </div>
      {/* The content of each page will be inserted here */}
      <Outlet />
    </div>
  );
};

export default Home