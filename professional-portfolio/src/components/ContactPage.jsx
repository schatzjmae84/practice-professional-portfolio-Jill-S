import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const encode = (data) => 
    
    Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
        
const ContactPage = () => {

    const { contact } = useParams();

    const [ formData, setFormData ] = useState({ 
        name: "", 
        email: "", 
        message: "" 
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error("Please fill in all fields.", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce
            });
            return;
        }    
            
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData }),
        })
        .then(() => {
            toast.success("Thank you for your message! I will get back to you soon.", 
                {
                position: "top-center",
                autoClose: 3000,
                    closeOnClick: true,
                    draggable: true,
                    transition: Bounce
                }
            );
            setFormData({ name: "", email: "", message: "" });
        }) 
        .catch(() => 
            toast.error("There was an error sending your message. Please try again later.", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                transition: Bounce
            })
        );          
    };        

    return (
        <div className="contact-page">
            <h2>{contact}</h2>
            <div>
                <h3>Contact Form</h3>
                <p>If you would like to get in touch with me, please use the contact form below, and I will respond as soon as possible. I look forward to hearing from you!</p>
                <form className="contact-form" name='contact' method='POST' data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <label>Name:
                    <input type="text" name="name" value={name} onChange={handleChange} required />
                    </label>
                    <label>Email:
                    <input type="email" name="email" value={email} onChange={handleChange} required />
                    </label>
                    <label>Message:
                    <textarea name="message" rows="5" placeholder="Please, enter message here" value={message} onChange={handleChange}></textarea>
                    </label>
                    <button className="form-submit" type="submit" onClick={handleSubmit}>SUBMIT CONTACT FORM</button>
                </form>
                <ToastContainer />                        
            </div>
        </div>
    );
};
    

export default ContactPage;