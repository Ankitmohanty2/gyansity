import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import React from "react"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", import.meta.env.VITE_API_KEY);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Formulário enviado com sucesso!");
        event.target.reset();
       setTimeout(() => {
        setResult("")
       }, 5000);
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send your message <img src={msg_icon} alt="" /></h3>
                <p>
                Please feel free to get in touch via the contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />contact@Gyansity.edu</li>
                    <li><img src={phone_icon} alt="" />(41) 39725-2456</li>
                    <li><img src={location_icon} alt="" />London Street, 123, block 56 <br />
                        United Kingdom, London
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder=" Write your Name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder=" Write Your Phone Number" required/>
                    <label>Message</label>
                    <textarea name="message"  rows="6" placeholder="Write a message" required></textarea>
                    <button type="submit" className="btn dark-btn">Send <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact