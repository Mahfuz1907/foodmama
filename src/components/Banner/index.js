import React from 'react';
import banner1 from '../../assets/image/banner1.png'
import banner2 from '../../assets/image/banner2.png'
import banner3 from '../../assets/image/banner3.png'
import banner4 from '../../assets/image/banner4.png'
import banner5 from '../../assets/image/banner5.png'
import banner6 from '../../assets/image/banner6.png'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner1} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner2} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner3} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner4} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner5} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner6} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner3} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner5} alt="" className='img2'/>
        <br /><br /><br />
        <img src={banner6} alt="" className='img2'/>
    </div>
  )
}

export default Banner;