import React from "react";
import './Header.css';

function Header({ currentPage, handlePageChange }) {
    return (
        <div lassName="main-containerx ">
            <div className="container">
                <nav class="d-flex justify-content-center py-3" id="sideNav">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#home"
                                onClick={() => handlePageChange('About')} className={currentPage === 'About' ? ' active navitems' : 'navitemsAct'} >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'active navitems' : 'navitemsAct'} >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active navitems' : 'navitemsAct'} >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/file/d/1SZAXvvPk_i8lrzt4VefcpWjgfGep0pra/view?usp=share_link" className={currentPage === 'Contact' ? 'active navitems' : 'navitemsAct'} >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;