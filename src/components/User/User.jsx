import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div style={{backgroundColor :'red'}}>
            <h1>userId : {user?.id}</h1>
            <h1>Name : {user?.name}</h1>
            <Link to={`/contract/${user.id}`}><button>User Details</button> </Link>
            
        </div>
    );
};

export default User;