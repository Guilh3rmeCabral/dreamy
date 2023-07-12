import React, { useState } from 'react';
import './Header.css'

function Header() {

    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index: any) => {
        setActiveLink(index);
    }

    return (
        <div className='space-navigation'>
            <a 
                className={`link-navigation ${activeLink === 0 ? 'active' : ''}`} 
                href='$'
                onClick={(event) =>{
                    event.preventDefault(); 
                    handleLinkClick(0);
                } }    
            >
                About us
            </a> 
            <a 
                className={`link-navigation ${activeLink === 1 ? 'active' : ''}`} 
                href='$'
                onClick={(event) =>{
                    event.preventDefault(); 
                    handleLinkClick(1);
                } }    
            >
                Products
            </a> 
            <a className='link-navigation' href='$'>
                <button className='btn-subscribe'>
                    Subscribe
                </button>
            </a>

        </div>
    );
}

export default Header;