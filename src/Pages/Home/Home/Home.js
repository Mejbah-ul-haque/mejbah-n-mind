import React from 'react';
import Banner from '../Banner/Banner';
import Goals from '../Goals/Goals';
import LeadItem from '../LeadItem/LeadItem';
import Services from '../Services/Services';
import Special from '../Special/Special';


const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <LeadItem></LeadItem>
            {/* <Banner></Banner> */}
            <Goals></Goals>
            <Services></Services>
            <Special></Special>

        </div>


    );
};

export default Home;