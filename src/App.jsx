import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Router1 from './component/Router1';



//בשם ה' נעשה ונצליח!!!!!!!!!!!!!!!!!!!!!!!
function App() {
const items=([
  { name: "Avocado-maki",
    id:1,
   price: 22,
   amount: 8,
   pic: "Avocado.jpg"
  },
  { name: "Crumbed-maki",
    id:2,
   price: 34,
   amount: 8,
   pic: "Crumbed.jpg"
  },{ name: "Salmon cucumber-maki and Nigiri",
    id:3,
   price: 22,
   amount: 8,
   pic: "NiguirSalmonCucumber.jpg"
  },{ name: "Salmon cucumber-maki",
    id:4,
   price: 22,
   amount: 12,
   pic: "SalmonCucumber.jpg"
  },{ name: "Salmon teriaki-maki",
    id:5,
   price: 22,
   amount: 8,
   pic: "Teriaki.jpg"
  },{ name: "Tuna-maki",
    id:6,
   price: 22,
   amount: 8,
   pic: "Tuna.jpg"
  },
  
])
const[cartitems,setcartitems]=useState([])
const[sum,setsum]=useState(0)



  return (
    <div>
      <Router1
  cartitems={cartitems}
  setcartitems={setcartitems}
  sum={sum}
  setsum={setsum}
  items={items}
/>
    </div>
  );
}

export default App;