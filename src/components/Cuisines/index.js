import React from 'react';
import bengali from '../../assets/image/bengali.png'

const Cuisines = () => {
  return (
    <>
        <div className="col-md-3">
    <div classname="product_card card mt-2 mb-2">
  <img classname="card-img-top img-fluid img-rounded" src={bengali} alt="burger"/>
  <div classname="card-body">
    <h4 classname="card-title">Bengali</h4>
  </div>

        </div>
    </div>
    </>
  )
}

export default Cuisines;