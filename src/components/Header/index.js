import React from 'react';
import { FaStarAndCrescent } from "react-icons/fa";
import Navigation from '../Header/Navigation/index';
import logo from '../../assets/image/logo.png';
import Menus from './Menus/index'



const Header = () => {
  return (
    <>
    <div className='container-fixed header fixed-top'>
    <p className='text-white bg-success text-bold header-ab'><FaStarAndCrescent className='crescent'/><span className='ms-5 me-5 mb-2 mt-2'>بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</span> <FaStarAndCrescent className='crescent'/></p>
    <div className='row ms-2 me-2'>
        

        <div className='col-md-3'>
        <img src={logo} alt="logo" className='logo mt-0 me-0'/>
        </div>

        <div className='col-md-8'>
        <Navigation />
        </div>

        

        <div className='col-md-1'>
        <Menus />
        </div>
    </div>
    
    
        
    
    

    </div>
    
    </>
  )
}

export default Header;