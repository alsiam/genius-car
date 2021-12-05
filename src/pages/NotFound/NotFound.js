import React from 'react';
import { Link } from 'react-router-dom';

const NotFounds = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to="/"><button>Back To </button></Link>
        </div>
    );
};

export default NotFounds;