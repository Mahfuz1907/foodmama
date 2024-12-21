import React from 'react';
import burger from '../../assets/image/burger.png';


const FeaturedProduct = () => {
  return (
    <>
    <div className="col-md-3">
    <div classname="product_card card mt-2 mb-2">
  <img classname="card-img-top img-fluid" src={burger} alt="burger"/>
  <div classname="card-body">
    <h4 classname="card-title">Chicken Burger</h4>
    <p classname="card-text">Made with fresh chicken.</p>
    
  </div>

        </div>
    </div>

   
            
    


        
    </>
  )
}

export default FeaturedProduct;