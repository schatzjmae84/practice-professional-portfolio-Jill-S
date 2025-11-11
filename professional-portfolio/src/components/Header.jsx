import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="site-header">
			<div className="header-inner">
				<div className="brand">Jillianne Schatz <br></br> 
                    Full Stack Software Developer
                </div>
				<nav className={`main-nav ${open ? "open" : ""}`}>
					<a href="/">Main</a>
					<a href="/resume">Resume</a>
					<a href="#projects">Projects</a>
					<a href="/contact">Contact</a>
				</nav>

				<button
					className="hamburger"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>
			</div>
		</header>
	);
};

export default Header;