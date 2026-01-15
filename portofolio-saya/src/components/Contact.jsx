import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Identity */}
                <div className="footer-section">
                    <h3>PrimaPortfolio</h3>
                    <p>Building digital experiences that matter.</p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Bandung, Jawa Barat, Indonesia</p>
                    <p>primaanugerahsyabana@gmail.com</p>
                </div>

                {/* Column 4: Socials */}
                <div className="footer-section">
                    <h4>Social</h4>
                    <div className="social-links">
                        <a href="https://www.instagram.com/primoshka_?igsh=M2Y0aWszYmoxdHhq" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                        <a href="https://www.linkedin.com/in/prima-anugerah-syabana-5926b1236/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://github.com/PrimaArise" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Prima Anugerah Syabana. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Contact;