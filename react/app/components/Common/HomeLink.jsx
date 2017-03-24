import React from 'react';
import {Link} from 'react-router-dom';

const HomeLink = ({price}) => {
    return (
        <Link to="/" className="home-link vcenter">Home</Link>
    )
}

export default HomeLink;
