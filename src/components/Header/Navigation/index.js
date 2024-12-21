import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <nav className="nav">
    <ul class="list-inline list-inline-horizontal">
  <li class="list-inline-item ms-auto"><Link to={'/'}><button>Home</button></Link></li>
  <li class="list-inline-item ms-auto"><Link to={'/rest'}><button>Restaurants</button></Link></li>
</ul>

    </nav>
    </>
  )
}

export default Navigation;