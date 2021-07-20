import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

function LandingPage() {
    return (
    <div className='caja'>
        <p className='welcome'>Welcome to VIDEOGAMES</p>
        <Link exact to="/home" className='button' >START</Link>
    </div>
    )
};

export default LandingPage;