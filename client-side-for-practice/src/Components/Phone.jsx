import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <p>Single phone here</p>
            <p>Name: {phone.name} </p>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;