import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Animals from '../components/Animals';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Animals />
            <Footer />
        </div>
    );
};

export default Home;