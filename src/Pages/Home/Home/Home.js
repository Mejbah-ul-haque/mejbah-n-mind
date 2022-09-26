import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Goals from '../Goals/Goals';
import LeadItem from '../LeadItem/LeadItem';
import Developer from '../Developer/Developer';
import Paper from '../Paper/Paper';
import Services from '../Services/Services';
import Special from '../Special/Special';
import About from '../../About/About';
import Social from '../Social/Social';


const Home = () => {
    return (
        <div className='container' style={{ minHeight: '100vh' }}>
            <LeadItem></LeadItem>
            {/* <Banner></Banner> */}
            <Goals></Goals>
            <Social></Social>
            <Services></Services>
            <Social></Social>
            <About></About>
            <Special></Special>
            <Developer></Developer>
            <Paper></Paper>
            <Contact></Contact>

        </div>


    );
};

export default Home;