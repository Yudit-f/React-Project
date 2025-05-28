import React from 'react'

const MyOrder = ({cartitems, setcartitems, sum,setsum}) => {
  const Submit = () => {
    setcartitems([])
    setsum(0)
    alert('Your order has been recibed ,a receipt has been sent to your email! ')
   }
   

  return (
    <div>

      <div className="cart-container">
      <h1>Order Summary  </h1>
      <div className="cart-grid">
        {cartitems.map(i => (
          <div key={i.id} className="product-card">
            <img src={`/Pictures/${i.pic}`} alt={i.name} />
            <h3>{i.name}</h3>
            <p>מחיר: {i.price} ₪</p>
            <p>כמות: {i.amount} יחידות</p>
          </div>
        ))}
      </div> 
      {cartitems.length > 0 ? (<>
             <p>Your total is:{sum}</p>
      <button onClick={Submit}>Confirmation</button></>
) : (
  <p> Your cart is empty! </p>
)} 

    </div>
    </div>
  )
}

export default MyOrder