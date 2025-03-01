import React from 'react';

const User = ({user}) => {
    return (
        <div style={{backgroundColor :'red'}}>
            <h1>user : {user?.name}</h1>
        </div>
    );
};

export default User;