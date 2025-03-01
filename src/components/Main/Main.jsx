import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div style={{backgroundColor: 'tomato' , padding: '10px'}}>
            <h2 style={{textAlign:'center'}}>Main Section</h2>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;