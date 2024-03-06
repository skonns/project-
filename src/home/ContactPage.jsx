import React, { useState } from 'react';
import './ContactPage.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}, Username: ${username}, Password: ${password}`);
  }

  return (
    <div className="contact-container">
       <h1 className="title">Hubungi Kami</h1>
      <p className="brandText">Pertanyaan, saran atau keluhan dapat disampaikan melalui:
      </p>
      <p className="brandText">
  Customer service Line kami di <a href="tel:1500600">1 500 600 </a> (berlaku tarif lokal) hari senin sampai minggu
  dari jam 10:00 sampai jam 22:00<br />
  Atau email ke 
   <a href= "mailto:customerservice@pizzahut.co.id">customerservice@pizzahut.co.id</a>
</p>
      <p className="brandText">Daftar sekarang untuk menerima email dan informasi dari Pizza hut secara berkala mengenal promosi, produk baru dan penawaran gratis.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Subject:</label>
          <textarea value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Name:</label>
          <textarea value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Phone:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="username">Your Email:</label>
          <textarea value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="username" placeholder="Enter your username (optional)" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your Message:</label>
          <textarea value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password (optional)" />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  )
}

export default Contact;




