import React from 'react';
import logo from '../../assets/gallerylogo.svg';
import dp from '../../assets/dp.png';
import { FaRocket } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
const dpStyle = {
  backgroundImage: `url(${dp})`,
};

const GallerySider = () => {
  return (
    <div className='sider'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='user-details'>
        <div className='dp' style={dpStyle}></div>
        <div>
          <h4>Anand Agarwal</h4>
          <span>anandagarwal@gmail.com</span>
        </div>
      </div>
      <ul className='menu'>
        <li>Motivation</li>
        <li>
          <span>Productivity</span>
          <button>Upgrade</button>
        </li>
        <li>Design</li>
        <li>Study</li>
      </ul>
      <div className='upgrade'>
        <FaRocket className='icon' />
        <div>
          <span>Pro account is more powerful. Get 30% off</span>
          <button>Buy Now</button>
        </div>
      </div>
      <h4 className='logout'>Logout</h4>
      <button className='add'>
        <AiOutlinePlus className='icon' />
      </button>
    </div>
  );
};

export default GallerySider;
