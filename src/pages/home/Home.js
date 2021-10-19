import React from 'react';
import Contact from '../contact/Contact';
import Experts from '../experts/Experts';
import Services from '../services/Services';
import Banner from './banner/Banner';

import './Home.css'

const Home = () => {
    return (
      <div id="home">
        <Banner></Banner>
        <Services></Services>
        <Experts></Experts>
        <Contact></Contact>
        </div>
    );
};

export default Home;