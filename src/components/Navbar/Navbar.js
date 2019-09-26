import React from 'react';
import './Navbar.css';
import Helmet3 from '../../img/Items/Item_Head_G_00_Lv3_C.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Helmet3} alt='Helmet3' className='helmet' />
      <h2>PUBG STATS</h2>
    </div>
  );
};

export default Navbar;
