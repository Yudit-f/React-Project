import React from 'react'
import { Route,  Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Cart from './Cart';
import Products from './Products';
import MyOrder from './MyOrder';
import Home from './Home';
import ProductsInfo from './ProductsInfo';
import Navbar from './Navbar';



const Router1 = ({ cartitems, setcartitems, sum, setsum, items }) => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Navbar />} >
        <Route index element={<Home />}/>
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Cart" element={<Cart cartitems={cartitems} setcartitems={setcartitems} sum={sum} setsum={setsum} />} />
          <Route path="Products" element={<Products items={items} setcartitems={setcartitems} cartitems={cartitems} sum={sum} setsum={setsum} />} />
          <Route path="MyOrder" element={<MyOrder cartitems={cartitems} setcartitems={setcartitems} sum={sum} setsum={setsum}/>} />
          <Route path="ProductsInfo/:id" element={<ProductsInfo items={items} />} /> {/* הנתיב הזה */}
        </Route>
      </Routes>

    </div>
  )
}

export default Router1