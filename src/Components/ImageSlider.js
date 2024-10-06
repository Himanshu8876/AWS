import React from 'react';
import './ImageSlider.css';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1618506429948-1746e6e8093f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Library Interior"
                    />
                    <Carousel.Caption>
                        <h3>Library Interior</h3>
                        <p>Explore the vast resources and quiet spaces of your local library.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Bookshelf"
                    />
                    <Carousel.Caption>
                        <h3>Bookshelf</h3>
                        <p>Dive into a world of knowledge with our extensive collection of books.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1544822688-c5f41d2c1972?q=80&w=1419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Reading"
                    />
                    <Carousel.Caption>
                        <h3>Reading</h3>
                        <p>Enjoy a quiet moment with a good book in a comfortable setting.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageSlider;
