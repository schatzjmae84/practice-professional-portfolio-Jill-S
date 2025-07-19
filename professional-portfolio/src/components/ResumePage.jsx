import { useParams } from "react-router-dom";


export default function HomePage() {

    const {resume} = useParams();

    return (

        <div className="resume-page">
            <h2>{resume}</h2>
            <header>
                <h1>Jillianne Schatz</h1>
            </header>    
            <h3>SUMMARY</h3>
            <p>
                Former band director and personal trainer with 17 years of experience working with creative problem-solving to prepare lessons, performances, and PT sessions that would meet the needs of diverse learners.  Recently completed the LaunchCode cohort, and is now confidently proficient in Java, Spring Boot, and React.  Venturing into a journey, striving to find a way to combine previous teaching experiences with new technical skills to bring a new creativity and passion to life through front-end web development. 
            </p>
            <h3>LANGUAGES | FRAMEWORKS | TOOLS</h3>
            <p>
                Java, JavaScript | React, Spring Boot | MySQL Workbench, Postman
            </p>
            <h3>EXPERIENCE</h3>
            <p>
                <strong>The Doggy Destination App -- LaunchCode Unit 1 Final Project</strong>
            </p>
            <ul>
                <li>
                    Developed an SPA that is geared towards dog owners in the city that are looking for some “Doggy Destinations” where they can be with their pup, still have fun, and maybe meet other dog owners.
                </li>
                <li>
                    Created a “Pup Participant Form” for the user to submit and become eligible for other “pupPerks.”
                </li>
                <li>
                    Implemented the ability for users to search and easily find “Doggy Destinations” of their choice.
                </li>
                <li>
                    Built a page to display their chosen “pup activity”, featuring a description of the activity along with a link to the destination's website.
                </li>
                <li>
                    Front-end React Application:  JavaScript | React | React-Router
                </li>
            </ul>
            <p><strong>Health & Wellness Director/Personal Trainer -- South City Family YMCA</strong></p>
            <p>July 2020 - October 2024</p>
            <ul>
                <li>
                    Collaborated with a team of roughly 40 staff members, ensuring all shifts and exercise classes were covered by implementing a more sufficient sub email system that reduced class cancellations.
                </li>
                <li>
                    Created a team of leaders to help raise money for the staff portion of our Annual Campaign; achieving a donation total that exceeded our goal.
                </li>
                <li>
                    Hosted health and wellness events for our YMCA members including Zumbathons, Mindfulness meetings featuring yoga and mindful eating tips, along with fitness challenges that anyone could participate in.
                </li>
                <li>
                    Scheduled and maintained a group exercise class list containing over 50 classes, while also leading many classes of my own, adapting to different learning styles and class requirements along the way.
                </li>
            </ul>
            <p><strong>Band Director and Founder -- North Texas Home-school Marching Band</strong>
            </p>
            <p>April 2017 - June 2019</p>
            <ul>
                <li>
                    Scheduled and conducted annual Spring and Winter performances.
                </li>
                <li>
                    Maintained a full ensemble with students ranging in age from 13 to 18; teaching complex concepts and displaying proficiency in performing on each instrument within the ensemble.
                </li>
                <li>
                    Coordinated with the local home school football team in order to march and perform in 4 to 5 of their “home” football games.
                </li>
                <li>
                    Hosted a band recruitment camp each spring for the up-coming marching season.
                </li>
                <li>
                    Prepared the students to perform for a solo and/or small ensemble judging experience.
                </li>

            </ul>
            <h3>EDUCATION</h3>
            <p>LaunchCode, Sortware Development, 2025</p>
            <p>Southeast Missouri State University, Bachelors in Music Education, Instrumental Music Education</p>        
        </div>

    );

};