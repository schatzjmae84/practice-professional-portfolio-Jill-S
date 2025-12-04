import picture from '../assets/screenshot1.png';
import image from '../assets/screenshot2.png';

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
                    <p>This is a full-stack web application that I developed using Java, Spring Boot, React, JavaScript, and MySQL. The Doggy Destination App is designed to help dog owners find pup-friendly locations such as dog parks, social pup settings, and events that are happening in the area. The app also allows users to leave reviews and ratings for the locations they visit.
                    <br />
                    <br />
                    The front-end of the application is built using React, providing a responsive and user-friendly interface. The back-end is powered by Spring Boot, which handles data management and API requests. MySQL is used as the database to store user information, location details, and reviews.
                    <br />
                    <br />
                    This project showcases my ability to work with both front-end and back-end technologies, as well as my understanding of database management and user experience design. I am excited to continue building and improving this application, and I look forward to adding more features in the future!
                    <br />
                    <br />
                        <a href="https://github.com/schatzjmae84/swd-unit2-finalProject-Jill-S" target="_blank" rel="noopener noreferrer" className="project-github-link">Click here to visit my GitHub page for The Doggy Destination App!!
                        </a>
                    </p>                    
                    <img className="project-image" src={picture} width={600} height={400} alt="The Doggy Destination App"/>
                    <img className="project-image2" src={image} width={600} height={400} alt="The Doggy Destination App - Category Selection"/>
                </div>
            </div>
        </div>    
    );
};

export default ProjectsPage;