import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Contract.css'

const Contract = () => {
    const users = useLoaderData();
    return (
        <div style={{ backgroundColor: 'peru', padding: '30px' }}>
            <h1>Contract Us</h1>

            <h1>Total user: {users.length}</h1>
            <div className='contract'>
                {
                    users.map(user => <User key={user?.id} user={user}></User>)
                }

            </div>
        </div>
    );
};

export default Contract;