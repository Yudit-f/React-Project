import React from 'react';
import { useParams } from 'react-router-dom'; // מאפשר שליפת פרמטרים מה-URL

// קומפוננטה שמציגה מידע על מוצר אחד
const ProductsInfo = ({ items }) => {
  const { id } = useParams(); // שליפת הפרמטר id מהכתובת
  const product = items.find(item => item.id === parseInt(id)); // חיפוש המוצר לפי id

  if (!product) return <p>המוצר לא נמצא.</p>; // אם לא נמצא מוצר – הודעה מתאימה

  return (
    <div className="product-card" >
      {/* תמונה של המוצר */}
      <img
        src={`/Pictures/${product.pic}`}
        alt={product.name}
        style={{ width: '200px', borderRadius: '10px' }}
      />
      
      {/* שם המוצר */}
      <h3>{product.name}</h3>

      {/* מחיר וכמות */}
      <p>מחיר: {product.price} ₪</p>
      <p>כמות: {product.amount} יחידות</p>

      {/* כפתור חזור */}
      <button onClick={() => window.history.back()} style={{ marginTop: '10px', padding: '8px 16px', borderRadius: '5px', backgroundColor: '#444', color: 'white', border: 'none' }}>
        חזור
      </button>
    </div>
  );
};
export default ProductsInfo;
