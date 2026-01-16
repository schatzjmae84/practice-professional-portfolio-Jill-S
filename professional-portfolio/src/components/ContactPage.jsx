import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields.", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce
            });
        } else {
            setFormData({ name: "", email: "", message: "" });
            toast.success("Thank you for your message! I will get back to you soon.", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce
            });           
        };
    };

    return (
        <div className="contact-page">
            <h2>{contact}</h2>
            <div>
                <h3>Contact Form</h3>
                <p>If you would like to get in touch with me, please use the contact form below, and I will respond as soon as possible. I look forward to hearing from you!</p>
                <form className="contact-form" name='contact' data-netlify="true">
                    <label>Name:
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>Email:
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>Message:
                    <textarea id="message" name="message" rows="5" placeholder="Please, enter message here" value={formData.message} onChange={handleChange}></textarea>
                    </label>
                    <button className="form-submit" type="submit" onClick={handleSubmit}>SUBMIT CONTACT FORM</button>
                </form>
                <ToastContainer />                        
            </div>
        </div>
    );
};

export default ContactPage;