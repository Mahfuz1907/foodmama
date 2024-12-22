import React from 'react';
import rest1 from '../../assets/image/rest1.png'
import { Link } from 'react-router-dom';

const RestCard = () => {
  return (
    <div className="col-md-3">
    <div classname="product_card card mt-2 mb-2">
  <img classname="card-img-top img-fluid img-rounded" src={rest1} alt="burger"/>
  <div classname="card-body">
    <h4 classname="card-title">Arabian Kitchen</h4>
    <p className='card-text'>Feel the taste.</p>
    <Link to={'/restora'}><button className='btn btn-success'>Visit</button></Link>
  </div>

        </div>
    </div>
  )
}

export default RestCard;
