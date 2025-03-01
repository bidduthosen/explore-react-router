import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ backgroundColor: 'purple', padding: '30px' }}>
            <h1>About section</h1>

            <div style={{ display: 'flex' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                    <Link className='link-ul' to={'/about'}> Product</Link>
                    <Link className='link-ul' to={'/about/Phone'}> Phone</Link>
                </ul>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default About;