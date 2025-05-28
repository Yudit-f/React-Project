import React from 'react'
import Cart from './Cart'
import AboutUs from './AboutUs'
import MyOrder from './MyOrder'
import Products from './Products'
import Home from './Home'
const ContactUs = () => {
const handleSubmit = () => {
    alert('ההודעה נשלחה בהצלחה!')
   }

  return (
    <div className="contact-form-container">
      <h1>צור קשר</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <text
          name="message"
          placeholder="Your message"
          rows="5"
          required
        />
        <button type="Submit">send</button>
      </form>
    </div>
  )
}

export default ContactUs