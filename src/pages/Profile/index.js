import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='container page'>
        
            
            
            <h3>SIGNED IN as 'mahfuz tamim'</h3>
            <h5>User Name: mahfuz tamim</h5>
            <p>Email: mahfuztamim1907@gmail.com </p><br />
            <label htmlFor="location" className='text-bold'>Enter your delivery Location:</label><br />
            <textarea name="location" id="location"></textarea><br /><br />
            <Link to={'/edit'}><button className='btn btn-success me-3 mb-5'>Edit Profile</button></Link>
            <Link to={'/change'}><button className='btn btn-success me-3 mb-5'>Change Password</button></Link><br />
            <button className='btn btn-danger me-3'>Sign Out <FaSignOutAlt /></button><br /><br />
            
       
      
    </div>
  )
}

export default Profile;