import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartitems,sum,setsum,setcartitems }) => {
const navigate = useNavigate();
  const deletitem=(id)=>{
   // מציאת אינדקס של האיבר לפי הID
    const index = cartitems.findIndex(p => p.id == id)
    //שכפל המערך המקורי
    const coppyarr = [...cartitems]
    // מחיקת האיבר מהמערך
    // מהאינדקס הרצוי ועוד אחד
    coppyarr.splice(index, 1)
    //עדכון המערך הנוכחי
    setcartitems(coppyarr)
    //עדכון הSUM
     let newSum = 0;
    coppyarr.forEach(item => {
      newSum += item.price;
    });
    setsum(newSum);
    

    }
    const Payment =()=>{
   navigate('/MyOrder');
 }
  return (
    <div className="cart-container">
      <h1>עגלת הקניות שלך</h1>
      <div className="cart-grid">
        {cartitems.map(i => (
          <div key={i.id} className="product-card">
            <img src={`/Pictures/${i.pic}`} alt={i.name} />
            <h3>{i.name}</h3>
            <p>מחיר: {i.price} ₪</p>
            <p>כמות: {i.amount} יחידות</p>
            <button onClick={() => deletitem(i.id)}>Delete item</button>
          </div>
        ))}
      </div> 
      
{cartitems.length > 0 ? (<>
  <p>Your total is:{sum}</p>
    <button onClick={Payment}>Payment</button></>
) : (
  <p> Your cart is empty! </p>
)}    </div>
  );
};

export default Cart;