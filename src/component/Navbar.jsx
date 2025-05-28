import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContactUs from './ContactUs'
import Cart from './Cart'
import AboutUs from './AboutUs'
import MyOrder from './MyOrder'
import Products from './Products'
import Home from './Home'
import ProductInfo from './ProductsInfo';
const Navbar = () => {
    return (
        <div className="my-background">
            <nav>
                <Link to="/">Home</Link>
                <Link to="Cart">Cart</Link>
                <Link to="ContactUs">Contact us</Link>
                <Link to="AboutUs">About us</Link>
                <Link to="Products">Products</Link>
                <Link to="MyOrder">My order</Link>
            </nav>
            {/* כאן ייכנס התוכן של כל דף */}
            <Outlet />
        </div>
    )
}

export default Navbar