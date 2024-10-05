import { useState } from "react";



/**
 this page is a general form for users to contact us
 */

const Contact = () => {

  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    request_date: '',
  })
  
  const handleInput = (event) => {
    const searchTerm = event.target.value;
    setInput(searchTerm);
    // Perform search functionality here
    console.log(`Searching for: ${searchTerm}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm()
  };



  return (
  <div className="contact-container">
    <input type="button" onSubmit={handleSubmit}/>
  </div>
  )
};

export default Contact;
