import { useParams } from 'react-router-dom';
import { useState } from 'react';


const ContactPage = () => {

    const { contact } = useParams();

    const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: ""
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            console.log(`Updating ${name}:`, value);
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        };    

    return (
        <div className="contact-page">
            <h2>{contact}</h2>
            <header>
                <h1>Contact Me</h1>
            </header>
            <p>If you would like to get in touch with me, please use the contact form below, and I will respond as soon as possible. I look forward to hearing from you!</p>
            <div>
                    <h3>Contact Form</h3>
                    <form>
                        <label>Name:
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </label><br />
                        <label>Email:
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label><br />
                        <label>Message:
                        <textarea id="message" name="message" rows="5" cols="30" placeholder="Please, enter message here" value={formData.message} onChange={handleChange}></textarea>
                        </label>  
                    </form>                        
                </div>
                <div>
                    <h3>Click the "Submit" button to send your contact form to me!</h3>
                    <button className="form-submit" type="submit" onClick={() => alert("Thank you for your message! I will get back to you soon.")}>Submit</button>
                </div>
        </div>
    );
};

export default ContactPage;