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

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;