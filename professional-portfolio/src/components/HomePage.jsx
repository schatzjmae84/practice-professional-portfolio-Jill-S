import pic from '../assets/portfolio-pic.jpg'; 

const HomePage = () => {
    
            
    return (

        <div className="home-page">  
            <img className="profile-pic" src={pic} width="225" height="320" alt="My Profile Picture" />          
            <div className="about-me">                
                <h3>About Me</h3>
                <p>Hello!  My name is Jill Schatz, and I am embarking on a new journey as a software developer.  I am from Ste. Genevieve, Missouri, and my husband and I have been living here in St. Louis for 5 years.  Since we moved here, we have had two crazy kids that are now 4 and a half and 1!  I am on the hunt for a new job where I can utilize my skills and passion for coding, and also put my creativity to good use!  My previous job was that of a Health and Wellness Director at a local YMCA where I supervised all of our personal trainers, group exercise instructors, and fitness floor staff.  The YMCA was a wonderful place to work and grow as a part of team that strove to help our community.  I look forward to getting the opportunity to work for a new company and joining a new team soon!</p>
            </div>               
        </div> 
    )
};

export default HomePage;

