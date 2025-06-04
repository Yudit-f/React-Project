import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ items, setitems }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [pic, setPic] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const Submit = (e) => {
    //מונע רענון של הדף
    e.preventDefault();
//בדיקה אם אחד מהשדות ריק
    if (!id || !name || !pic || !amount || !price) {
      alert('נא למלא את כל השדות');
      return;
    }
    const newProduct = {
      id: Number(id),
      name,
      pic: pic + ".jpg",
      amount: Number(amount),
      price: Number(price),
    };

    setitems([...items, newProduct]);

    alert('המוצר נוסף בהצלחה!');
    navigate('/Products'); // חזרה לדף המוצרים
  };

  return (
    <div className="add-product-form-container">
      <h2>הוספת מוצר חדש</h2>
      <form onSubmit={Submit} className="add-product-form">
        <input
          type="number"
          placeholder="Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Picture Name (without .jpg)"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        /><br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br />

        <button type="submit">הוסף מוצר</button>
      </form>
    </div>
  );
};

export default AddProduct;