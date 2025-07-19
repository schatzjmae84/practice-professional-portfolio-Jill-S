import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
            <header>
                <h1><strong>Jillianne Schatz</strong></h1>
                <h2><strong>Full Stack Software Developer</strong></h2>
                <h2> JavaScript, React | Java, Spring Boot | MySQL Workbench</h2>
                <hr />
            </header>
            <div className="nav-bar">
                <div>
                    <img className="profile-pic" src={pic} width="200" height="225" alt="My Profile Picture" />
                        <h3>About Me</h3>
                        <p>Hello!  My name is Jill Schatz, and I am embarking on a new journey in learning how to code.  I am from Ste. Genevieve, Missouri, and my husband and I have been living here in St. Louis for 5 years.  Since we moved here, we have had two crazy kids that are now 4 and 5 months old!  I am working on this new career in software development so I can find a good job, and help us save up some money to start building a house.  My previous job was Health and Wellness Director at a local YMCA where I supervised all of our personal trainers, group exercise instructors, and fitness floor staff.  The YMCA is a wonderful place, and I hope to be able to get back to personal training someday soon once things get settled and I am finished with this amazing LaunchCode course.  Fitness is a passion of mine, and I love helping others to find their niche when it comes to weight training!</p>
                </div>

                <section>
                    <h3>Achievements and Resume</h3>
                    <table border="1">
                        <tr>
                            <th>Achievements</th>
                            <th>Description</th>
                            <th>Experience</th>
                        </tr>
                        <tr>
                            <td>Middle School and High School Band Director</td>
                            <td>Able to teach and play all instruments included in a concert band.</td>
                            <td>Bachelors in Music Education and 10 years experience</td>
                        </tr>
                        <tr>
                            <td>Personal Trainer</td>
                            <td>One-on-One or group training, teaching Bootcamps, leading Senior Fitness Classes</td>
                            <td>ACE Fitness Certification and 9 years of experience</td>
                        </tr>
                        <tr>
                            <td>LaunchCode Unit 1 Front-end SPA Project</td>
                            <td>This app is geared towards dog owners in the city that are looking for some “Doggy Destinations” where they can be with their pup, still have fun, and maybe meet other dog owners.</td>
                            <td><Link to="https://doggy-destination.netlify.app/">The Doggy Destination App</Link></td>
                        </tr>
                        <tr>
                            <td>
                                For more achievements, experience, and my resume, please click the following link:
                            </td>
                            <td><Link to="/resume">Jillianne Schatz | Resume</Link>
                            </td>
                        </tr>
                    </table>
                </section>

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
                <footer>
                    <p>&copy; 2025 Professional Portfolio | Jill Schatz <br />
                        <Link to="https://github.com/schatzjmae84" target="_blank">My GitHub Page</Link> <br />
                        <Link to="https://www.linkedin.com/in/jillianne-schatz/" target="_blank">My LinkedIn Page</Link>
                    </p>
                </footer>
            </div>    
        </div> 

    )
};

export default HomePage;

