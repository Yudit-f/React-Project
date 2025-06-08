import React from 'react';
import ProductInfo from './ProductsInfo'
import { useNavigate } from 'react-router-dom';
import MyContext from '../context';
import { useContext } from 'react';
import  { useState } from 'react';
import AddProduct from './AddProduct';



const Products = ({ items,setitems,cartitems,setcartitems,sum,setsum}) => {
  const navigate = useNavigate();
  const { CurrentUser } = useContext(MyContext);
  const { manager } = useContext(MyContext);
  // בלחיצה על כפתור, ננווט לדף מוצר לפי ה-id שלו
  const handleClick = (id) => {
navigate(`/ProductsInfo/${id}`);
  };
  const addtocart=(i)=>{
    setcartitems([...cartitems,i])
    alert("item added!!")
  setsum(prevSum => prevSum + i.price); // עדכון הסכום הנוכחי
  }
  const deleteitem=(id)=>{
   // מציאת אינדקס של האיבר לפי הID
    const index = items.findIndex(p => p.id == id)
    //שכפל המערך המקורי
    const coppyarr = [...items]
    // מחיקת האיבר מהמערך
    // מהאינדקס הרצוי ועוד אחד
    coppyarr.splice(index, 1)
    //עדכון המערך הנוכחי
    setitems(coppyarr)
  }
 const addProduct = () => {
  
  navigate(`/AddProduct/`)

 

 }
  return (
    <div className="products-container">
      {items.map(i => (
        <div key={i.id} className="product-card">
          <img src={`/Pictures/${i.pic}`} alt={i.name} style={{ width: '150px' }} />
          <h3>{i.name}</h3>
          <p>Price: {i.price} ₪</p>
          <p>Amount: {i.amount} units</p>
          <button onClick={() => handleClick(i.id)}>More Details</button>
          <button onClick={() => addtocart(i)}>Add item</button>
          {manager && (
  <button onClick={() => deleteitem(i.id)}>delete item</button>
)}
        </div>
        
        
      ))}
      <div>
        {manager && (
  <button onClick={() => addProduct()}>add items</button>
    )}
      </div>
    </div>
  )
}

export default Products;