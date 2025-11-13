import { SocialIcon } from 'react-social-icons';

const Footer = () => {

    return (
        <footer className="site-footer"> 
            <div>         
                &copy; 2025 Professional Portfolio | Jillianne Schatz                                 
                <SocialIcon 
                    url="https://www.linkedin.com/in/jillianne-schatz" 
                    style={{ height: 35, width: 35, marginRight: '10px' }} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                />
                <SocialIcon 
                    url="https://github.com/schatzjmae84" 
                    style={{ height: 35, width: 35, marginRight: '10px' }} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                />
            </div>
        </footer>
    )
};

export default Footer;