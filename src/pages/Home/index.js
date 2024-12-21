import React from 'react';
import FeaturedProduct from '../../components/FeaturedProduct';
import Slider from "react-slick";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import Cuisines from '../../components/Cuisines';
import SearchBox from '../../components/Header/SearchBox/index.js'
import Banner from '../../components/Banner/index.js';


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





const Home = () => {


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
    <>
    
    <div className="container page">
      <div className='search'>
      <SearchBox />
      </div>
      
      <div className="row">
        <div className="col-md-3">
          <Banner />
        </div>
        <div className="col-md-9">
        <h3 className='text-success mb-5 mt-5'>Your Daily Deals</h3>
      <div className="row home-product">
      <Slider {...productSliderOption}>
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     <FeaturedProduct />
     </Slider>
      </div>
      <h3 className='text-success mb-5 mt-5'>Favourite Cuisines</h3>  
      <div className="row home-product">
        <Slider {...productSliderOption}>
          <Cuisines />
          <Cuisines />
          <Cuisines />
          <Cuisines />
          <Cuisines />
          <Cuisines />
          <Cuisines />
          <Cuisines />
          <Cuisines />
        </Slider>
      </div><br /><br />
        </div>

        
      
      </div>
      
     
        

      
      
      
        </div>
      
      
    

   
    

    </>
    
  )
}

export default Home;