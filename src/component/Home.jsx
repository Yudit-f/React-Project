import React from 'react'
import { Link,Outlet } from 'react-router-dom'
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
            <h1>ברוכים הבאים לעולם הסושי!</h1>
            <p> אצלנו תמצאו שילוב מושלם של מסורת יפנית וטעמים מודרניים, עם דגש על טריות, איכות ודיוק אומנותי.הסושי שלנו נחתך באהבה ומוגש בתשוקה, כדי להעניק לכם חוויה קולינרית ייחודית – בין אם אתם חובבי סשימי מתוחכם או מתרגשים לגלות רולים חדשים.אז שבו בנחת, הזמינו את המנה האהובה עליכם, ותנו לנו לקחת אתכם למסע טעמים קסום.</p>
          </div>
      {/* כאן ייכנס התוכן של כל דף */}
      <Outlet />
    </div>
  );
};

export default Home