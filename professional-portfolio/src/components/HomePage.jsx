import pic from '../assets/portfolio-pic.jpg'; 
import { useSpring, animated } from '@react-spring/web';

const HomePage = () => {

    const fadeIn = useSpring({
        from: { transform: 'translateX(-100px)', opacity: 0 },
        to: { transform: 'translateX(0px)', opacity: 1 },
        config: { tension: 200, friction: 24 }
    });

    return (

        <div className="home-page">  
            <img className="profile-pic" src={pic} width="225" height="320" alt="My Profile Picture" />   
            <div className="intro-text">
                <animated.h1 style={fadeIn}>Full Stack Software Developer</animated.h1>
                <animated.h2 style={fadeIn}>Welcome to my professional portfolio!</animated.h2>
            </div>                   
        </div>         
    )
};

export default HomePage;

