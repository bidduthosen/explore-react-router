import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const userDetail = useLoaderData()
    const {userId} = useParams()
    console.log(userId)
    const navigate = useNavigate()
    const handleUser = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>User Details</h1>
            <h1>id: {userDetail.id}</h1>
            <h1>Name {userDetail.name}</h1>
            <Link onClick={handleUser}><button>Back to</button></Link>
        </div>
    );
};

export default UserDetails;