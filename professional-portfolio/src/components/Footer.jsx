import { SocialIcon } from 'react-social-icons';

const Footer = () => {

    return (
        <footer className="site-footer"> 
            <div className="footer-inner">        
                <div className="footer-text">&copy; 2025 Professional Portfolio | Jillianne Schatz</div>
                <div className="socials">
                    <SocialIcon 
                        url="https://www.linkedin.com/in/jillianne-schatz" 
                        className="social-icon"
                        target="_blank" 
                        rel="noopener noreferrer" 
                    />
                    <SocialIcon 
                        url="https://github.com/schatzjmae84" 
                        className="social-icon"
                        target="_blank" 
                        rel="noopener noreferrer" 
                    />
                </div>
            </div>
        </footer>
    )
};

export default Footer;