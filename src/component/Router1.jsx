import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Cart from './Cart';
import Products from './Products';
import MyOrder from './MyOrder';
import Home from './Home';
import ProductsInfo from './ProductsInfo';
import Navbar from './Navbar';
import Login from './LogIn';
import { MyProvider } from '../context';
import LogOut from './LogOut';

const Router1 = ({ cartitems, setcartitems, sum, setsum, items, store }) => {
  return (
    <BrowserRouter>
      <MyProvider value={store}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="LogOut" element={<LogOut  setsum={ setsum} setcartitems={setcartitems}  /> } />
            <Route
              path="Cart"
              element={
                <Cart
                  cartitems={cartitems}
                  setcartitems={setcartitems}
                  sum={sum}
                  setsum={setsum}
                />
              }
            />
            <Route
              path="Products"
              element={
                <Products
                  items={items}
                  cartitems={cartitems}
                  setcartitems={setcartitems}
                  sum={sum}
                  setsum={setsum}
                />
              }
            />
            <Route
              path="MyOrder"
              element={
                <MyOrder
                  cartitems={cartitems}
                  setcartitems={setcartitems}
                  sum={sum}
                  setsum={setsum}
                />
              }
            />
            <Route path="ProductsInfo/:id" element={<ProductsInfo items={items} />} />
            <Route path="LogIn" element={<Login />} />
          </Route>
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
};

export default Router1;