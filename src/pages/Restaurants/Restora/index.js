import React from 'react'
import Banner from '../../../components/Banner';
import SearchBox from '../../../components/Header/SearchBox';
import Slider from "react-slick";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import FoodCard from '../../../components/FoodCard';
import BiryaniCard from '../../../components/BiryaniCard';
import DessertCard from '../../../components/DessertCard';
import DrinkCard from '../../../components/DrinkCard';
import ItemCard2 from '../../../components/ItemCard2';
import ItemCard from '../../../components/ItemCard';
import ItemCard3 from '../../../components/ItemCard3';


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



const Restora = () => {

    var productSliderOption = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
        <h2 className='restname'>Arabian Kitchen</h2>
        <div className="row rest3">
        <h3 className='text-success'>Fast Food</h3>
        <Slider {...productSliderOption}>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          </Slider>
        </div>

        <div className="row rest3">
        <h3 className='text-success'>Biryani Items</h3>
        <Slider {...productSliderOption}>
          <BiryaniCard />
          <ItemCard2 />
          <BiryaniCard />
          <ItemCard2 />
          <BiryaniCard />
          <BiryaniCard />
          <ItemCard2 />
          <BiryaniCard />
          <BiryaniCard />
          <ItemCard2 />
          <BiryaniCard />
          <ItemCard2 />
          <BiryaniCard />
          <BiryaniCard />
          <ItemCard2 />
          <BiryaniCard />
          </Slider>
        </div>


        <div className="row rest3">
        <h3 className='text-success'>Dessert</h3>
        <Slider {...productSliderOption}>
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
          </Slider>
        </div>

        <div className="row rest3">
        <h3 className='text-success'>Curry</h3>
        <Slider {...productSliderOption}>
          <ItemCard />
          <ItemCard3 />
          <ItemCard3 />
          <ItemCard />
          <ItemCard3 />
          <ItemCard />
          <ItemCard />
          <ItemCard3 />
          <ItemCard />
          <ItemCard />
          <ItemCard3 />
          <ItemCard />
          <ItemCard3 />
          <ItemCard />
          <ItemCard3 />
          </Slider>
        </div>


        <div className="row rest3">
        <h3 className='text-success'>Drinks</h3>
        <Slider {...productSliderOption}>
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          </Slider>
        </div>
      
      </div>
    </div>
    
  </div>
  )
}

export default Restora;