import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Contract = () => {
    const users = useLoaderData();
    return (
        <div  style={{backgroundColor: 'peru', padding: '30px'}}>
            <h1>Contract Us</h1>

            <h1>{users.length}</h1>
            {
                users.map(user => <User key={user?.id} user={user}></User>)
            }
        </div>
    );
};

export default Contract;