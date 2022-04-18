import React from 'react';
import Banner from '../Banner/Banner';
import Goals from '../Goals/Goals';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Banner></Banner>
            <Goals></Goals>
            <Services></Services>
        </div>


    );
};

export default Home;