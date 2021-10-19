import React from 'react';
import Contact from '../contact/Contact';

import Prices from '../Prices/Prices';
import Services from '../services/Services';
import Banner from './banner/Banner';

import './Home.css'

const Home = () => {
    return (
      <div id="home">
        <Banner></Banner>
        <Services></Services>
        <hr />
        <Prices></Prices>
        <Contact></Contact>
        </div>
    );
};

export default Home;