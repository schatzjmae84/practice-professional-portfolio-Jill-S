import { useParams } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { contact } = useParams();
const encode = (data) => 
    
    Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");

class ContactPage extends React.Component {
    
    state = { name: "", email: "", message: "" };    

    handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
        if (!this.state.name || !this.state.email || !this.state.message) {
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

    handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    render(){
        return (
            <div className="contact-page">
                <h2>{contact}</h2>
                <div>
                    <h3>Contact Form</h3>
                    <p>If you would like to get in touch with me, please use the contact form below, and I will respond as soon as possible. I look forward to hearing from you!</p>
                    <form className="contact-form" name='contact' method='POST' data-netlify="true" onSubmit={this.handleSubmit}>
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
};    

export default ContactPage;