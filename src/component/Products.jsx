import React from 'react';
import ProductInfo from './ProductsInfo'
import { useNavigate } from 'react-router-dom';

const Products = ({ items,cartitems,setcartitems,sum,setsum}) => {
  const navigate = useNavigate();

  // בלחיצה על כפתור, ננווט לדף מוצר לפי ה-id שלו
  const handleClick = (id) => {
navigate(`/ProductsInfo/${id}`);
  };
  const addtocart=(i)=>{
    setcartitems([...cartitems,i])
    alert("item added!!")
  setsum(prevSum => prevSum + i.price); // עדכון הסכום הנוכחי
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


        </div>
      ))}
    </div>
  );
};

export default Products;