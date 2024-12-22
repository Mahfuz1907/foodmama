import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";

const Navigation = () => {
  return (
    <>
    <nav className="nav">
    <ul class="list-inline list-inline-horizontal">
  <li class="list-inline-item ms-auto"><Link to={'/'}><button>Home<FaHome className='ms-2'/></button></Link></li>
  <li class="list-inline-item ms-auto"><Link to={'/rest'}><button>Restaurants<IoIosRestaurant className='ms-2'/></button></Link></li>
</ul>

    </nav>
    </>
  )
}

export default Navigation;
