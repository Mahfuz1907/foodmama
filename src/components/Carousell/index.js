import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import one from '../../assets/image/CarouselImage/one.png';
import two from '../../assets/image/CarouselImage/two.png';
import three from '../../assets/image/CarouselImage/three.png';
import four from '../../assets/image/CarouselImage/three.png';
import five from '../../assets/image/CarouselImage/three.png';

const Carousell = () => {
  return (
    <div><Carousel className='rest-cont'>
    <Carousel.Item>
      <img src={one} alt='one' text="First slide" className='img2' />
      
    </Carousel.Item>
    <Carousel.Item>
    <img src={two} alt='one' text="Second slide" className='img2' />
      
    </Carousel.Item>
    <Carousel.Item>
    <img src={three} alt='one' text="Third slide" className='img2' />
      
    </Carousel.Item>

    <Carousel.Item>
      <img src={four} alt='one' text="Fourth slide" className='img2' />
      
    </Carousel.Item>

    <Carousel.Item>
      <img src={five} alt='one' text="Fifth slide" className='img2' />
      
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carousell;