import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContactUs from './ContactUs'
import Cart from './Cart'
import AboutUs from './AboutUs'
import MyOrder from './MyOrder'
import Products from './Products'
import Home from './Home'
import ProductInfo from './ProductsInfo';
import Login from './LogIn'
import LogOut from './LogOut'
import MyContext from '../context'
import { useContext } from 'react'
const Navbar = () => {
  const { CurrentUser } = useContext(MyContext);

  return (
    <div className="my-background">
      <nav>
        <Link to="/">Home</Link>
        <Link to="Cart">Cart</Link>
        <Link to="ContactUs">Contact us</Link>
        <Link to="AboutUs">About us</Link>
        <Link to="Products">Products</Link>
        <Link to="MyOrder">My order</Link>

        {CurrentUser ? (
          <Link to="/LogOut">LogOut</Link>
        ) : (
          <Link to="/LogIn">LogIn</Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;