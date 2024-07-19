import { useState } from "react";





const Contact = () => {

  const [input, setInput] = useState('')
  const handleInput = (input) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
  <div className="contact-container">
    <input type="button" onSubmit={handleSubmit}/>
  </div>
  )
};

export default Contact;
