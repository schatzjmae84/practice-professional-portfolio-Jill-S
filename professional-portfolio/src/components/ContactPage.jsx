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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        // reset form data
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-page">
            <h2>{contact}</h2>
            <div>
                <h3>Contact Form</h3>
                <p>If you would like to get in touch with me, please use the contact form below, and I will respond as soon as possible. I look forward to hearing from you!</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>Name:
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>Email:
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>Message:
                    <textarea id="message" name="message" rows="5" placeholder="Please, enter message here" value={formData.message} onChange={handleChange}></textarea>
                    </label>
                    <button className="form-submit" type="submit">Submit</button>
                </form>                        
            </div>
        </div>
    );
};

export default ContactPage;