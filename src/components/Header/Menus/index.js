import React from 'react';
import { MdOutlineMenuBook } from "react-icons/md";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CgProfile } from "react-icons/cg";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Menus = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='menu'>
    <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MdOutlineMenuBook />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className='menus-item' onClick={handleClose}><Link to={'/profile'}>Profile</Link> <CgProfile className='ms-2'/> </MenuItem>
        <MenuItem className='menus-item' onClick={handleClose}><Link to={'/cart'}>Cart</Link> <TiShoppingCart className='ms-2'/> </MenuItem>
        <MenuItem className='menus-item' onClick={handleClose}><Link to={'/log'}>Sign In</Link> <CiLogout className='ms-2' /> </MenuItem>
        <MenuItem className='menus-item-1' onClick={handleClose}>Sign Out <IoLogInOutline className='ms-2'/> </MenuItem>
      </Menu>
    
    </div>
  )
}

export default Menus;