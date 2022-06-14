import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Goals from '../Goals/Goals';
import LeadItem from '../LeadItem/LeadItem';
import Services from '../Services/Services';
import Special from '../Special/Special';
import About from '../../About/About';


const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <LeadItem></LeadItem>
            {/* <Banner></Banner> */}
            <Goals></Goals>
            <Services></Services>
            <About></About>
            <Special></Special>
            
            <Contact></Contact>

        </div>


    );
};

export default Home;