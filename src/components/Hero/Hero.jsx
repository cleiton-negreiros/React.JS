import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
return (
    <div className="hero dflex alignCenter">
        <div className="hero-text">
            <h1>Let Your Home Be Unique</h1>
            <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            <Link>
                <Button buttonStyle="secondary" arrow>
                    Get Started
                </Button>
            </Link>
        </div>
    </div>
    );
};

export default Hero;