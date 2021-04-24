import React from 'react';
import { Badge } from 'antd';
import { AiFillBell, AiOutlinePlus } from 'react-icons/ai';
import dp from '../../assets/dp.png';
import Search from 'antd/lib/transfer/search';
const dpStyle = {
  backgroundImage: `url(${dp})`,
};
const Headbar = () => {
  return (
    <div className='headbar'>
      <div className='content'>
        <div className='text'>
          <h2>Dashboard</h2>
          <p>
            Monday <span>02 July 2020</span>
          </p>
        </div>
      </div>
      <div className='action'>
        <div className='user-info'>
          <Badge dot>
            <AiFillBell className='icon' />
          </Badge>
          <div className='info'>
            <span>Johe Bayel</span>
            <div className='dp' style={dpStyle}></div>
          </div>
        </div>
        <div className='user-action'>
          <button>
            <AiOutlinePlus className='icon' /> Add
          </button>
          <Search
            placeholder='input search text'
            // onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Headbar;
