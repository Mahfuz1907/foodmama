import React from 'react';
import SearchBox from '../../components/Header/SearchBox';
import Slider from "react-slick";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import Banner from '../../components/Banner';
import Carousell from '../../components/Carousell';
import RestCard from '../../components/RestCard';


const PreviousArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <FaCircleArrowLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <FaCircleArrowRight />
    </div>
  );
};



const Restaurants = () => {


  var productSliderOption = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,   // Use arrow from react-icons
    prevArrow: <PreviousArrow />,
  };


  return (
    <div className='page container'>
      <SearchBox />
      <div className="row">
        <div className="col-md-3">
          <Banner />
        </div>
        <div className="col-md-9">
          <div className="row rest1">
          <Carousell />
          </div>
          <div className="row rest2">
          <Slider {...productSliderOption}>
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            </Slider>
          </div>
        
        </div>
      </div>
      
    </div>
  )
}

export default Restaurants;