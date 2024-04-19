import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            <p>All phones here: {phones.length}</p>
    
        </div>
    );
};

export default Phones;