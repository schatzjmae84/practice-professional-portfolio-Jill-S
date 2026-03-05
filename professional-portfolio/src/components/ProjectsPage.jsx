import demo from '../assets/Jillianne Schatz - The Doggy Destination App.mp4';

const ProjectsPage = () => {

    return (

        <div>
            <div className="projects-page">
                <h3>Projects</h3>
                <p>Welcome to my Projects Page! On this page, I am displaying all of the projects that I have worked on, including a web application I have developed. This project highlights my skills in full-stack development, problem-solving, and creativity.
                <br />
                <br />
                Feel free to explore and reach out on my contact page if you have any questions or would like to collaborate!  There will be more projects posted here soon, so feel free to check back anytime!! &#128522;
                </p>
            </div>
            <div>                   
                <div className="project-image-container">
                    <h3>The Doggy Destination App</h3>                        
                    <p>
                        This is a full-stack web application that I developed using Java, Spring Boot, React, JavaScript, and MySQL. The Doggy Destination App is designed to help dog owners find pup-friendly locations such as dog parks, social pup settings, and events that are happening in the area. The app also allows users to leave reviews and ratings for the locations they visit.
                        <br />
                        <br />
                        The front-end of the application is built using React, providing a responsive and user-friendly interface. The back-end is powered by Spring Boot, which handles data management and API requests. MySQL is used as the database to store user information, location details, and reviews.
                        <br />
                        <br />
                        This project showcases my ability to work with both front-end and back-end technologies, as well as my understanding of database management and user experience design. I am excited to continue building and improving this application, and I look forward to adding more features in the future!         
                    </p>      
                    <a 
                        href="https://github.com/schatzjmae84/swd-unit2-finalProject-Jill-S" target="_blank" rel="noopener noreferrer" className="project-github-link">GitHub page for The Doggy Destination App!!
                    </a>
                    <a 
                        href={demo} target="_blank" rel="noopener noreferrer" className="project-video-link">Watch below or download a demo of my app!!
                    </a>
                    <video className="project-video" controls>
                        <source src={demo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="new-project">
                    <h3>The Tranquil Sloth</h3>
                    <p>
                        ***New Project In the Works!!***   I am currently working on this project, which is going to be a full-stack web application.  I am designing this app to help support users as they work towards improving their mental health and well-being.  
                        <br />
                        <br />    
                        There are times when trying to find the right outlet, when one is in a state of mental distress, can be overwhelming and a seemingly impossible task.  I want this app to be a resource for those that are needing to feed whatever part of them that is suffering; whether it is their mind, body, heart, soul, or all of the above.  I want to try to give my users ideas that may be too difficult to think of right now so they can start on their journey towards healing and getting back to a place of balance and peace in their lives.
                        <br />
                        <br />
                        Sloths are known to symbolize mindfulness, tranquility, and patience.  They embody a very "Pura Vida" lifestyle, which is all about living life to the fullest and appreciating the simple things.  I want this app to be a reminder to my users that they can take things slow, be patient with themselves, and find joy in the little moments of life, even during difficult times.  I am excited to continue working on this project and share it with you all soon!                        
                    </p>
                    <a 
                        href="https://github.com/schatzjmae84/the-tranquil-sloth-app" target="_blank" rel="noopener noreferrer" className="project-github-link">GitHub page for The Tranquil Sloth App!!
                    </a>
                    <p>
                        (Under Construction, yet still viewable)
                    </p>
                </div>
            </div>     
        </div>    
    );
};

export default ProjectsPage;