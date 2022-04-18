import React from 'react';
import { Carousel } from 'react-bootstrap';
import journalism1 from '../../../Images/Banner/journalism1.jpg';
import journalism2 from '../../../Images/Banner/journalism2.jpg';
import journalism3 from '../../../Images/Banner/journalism3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={journalism1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Journalism</h1>
                        <p>Journalism is a promising and challenging profession. Time management is very important here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={journalism2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Challenge</h1>
                        <p>A successful person has to take challenges in every step. Journalists face many challenges.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={journalism3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Development</h1>
                        <p>Nothing can be achieved in this life without perseverance. The harder he works, the more successful he will be.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;