import React from 'react';
import Nav from '../Nav/Nav';
import './Main.css'
import { Outlet, useLocation, useNavigation } from 'react-router-dom';

const Main = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div style={{ backgroundColor: 'tomato', padding: '10px' }}>
            <h2 style={{ textAlign: 'center' }}>Main Section</h2>
            <Nav></Nav>
            {
                navigation.state === 'loading' ?
                    <div className="loader navigete-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    :
                    <Outlet></Outlet>
            }
        </div>
    );
};

export default Main;