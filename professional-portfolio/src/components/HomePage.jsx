import { useState } from "react";
import pic from '../assets/profile-pic.jpg'; 


const HomePage = () => {

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

        <div className="home-page">
            <div className="nav-bar">
                <div>
                    <img className="profile-pic" src={pic} width="200" height="225" alt="My Profile Picture" />
                        <h3>About Me</h3>
                        <p>Hello!  My name is Jill Schatz, and I am embarking on a new journey in learning how to code.  I am from Ste. Genevieve, Missouri, and my husband and I have been living here in St. Louis for 5 years.  Since we moved here, we have had two crazy kids that are now 4 and 5 months old!  I am working on this new career in software development so I can find a good job, and help us save up some money to start building a house.  My previous job was Health and Wellness Director at a local YMCA where I supervised all of our personal trainers, group exercise instructors, and fitness floor staff.  The YMCA is a wonderful place, and I hope to be able to get back to personal training someday soon once things get settled and I am finished with this amazing LaunchCode course.  Fitness is a passion of mine, and I love helping others to find their niche when it comes to weight training!</p>
                </div>            

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
        </div> 

    )
};

export default HomePage;

