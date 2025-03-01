import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <ul className='nav'>
                <Link className='link-ul' to={'/'}>Home</Link>
                <Link className='link-ul' to={'/about'}>about</Link>
                <Link className='link-ul' to={'/contract'}>Contract</Link>
                <Link className='link-ul' to={'/'}>Blog</Link>
            </ul>
        </div>
    );
};

export default Nav;