import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../image/Banner/banner1.jpg'
import image2 from '../../../image/Banner/banner2.jpg'
import image3 from '../../../image/Banner/banner 3.jpg'


const Banner = () => {
    return (
        <div className="home mb-5" id="home">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
                    src={ image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Keep Your Body Feet and Strong</h1>
      <p>‘The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.’</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>All progress takes place outside the comfort zone.</h1>
      <p>Things may come to those who wait, but only the things left by those who hustle.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Clean, Safe, & Friendly Fitness for Every BODY</h1>
      <p>  Our team members are committed to maintaining the highest standards in each of our facilities every day.</p>
    </Carousel.Caption>
  </Carousel.Item>
            </Carousel>
            </div>
    );
};

export default Banner;