import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <ul className='nav'>
                <NavLink className='link-ul' to={'/'}>Home</NavLink>
                <NavLink className='link-ul' to={'/about'}>About</NavLink>
                <NavLink className='link-ul' to={'/contract'}>Home</NavLink>
                <NavLink className='link-ul' to={'/'}>Contract</NavLink>
                <Link className='link-ul' to={'/'}>Blog</Link>
            </ul>
        </div>
    );
};

export default Nav;