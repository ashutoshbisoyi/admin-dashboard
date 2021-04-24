import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { BsThreeDots } from 'react-icons/bs';
import { BsArrowUpRight, BsArrowDownRight } from 'react-icons/bs';

const StatusCards = ({ value, percent, change }) => {
  const [strokeColor, setstrokeColor] = useState('#906CDE');

  useEffect(() => {
    if (percent < 50) {
      setstrokeColor('#FC525F');
    }
  }, [percent]);

  return (
    <div className='status-card-container'>
      <div className='panel-card status-card'>
        <div className='top'>
          <span>Total Application</span>
          <BsThreeDots />
        </div>
        <div className='main'>
          <div className='content'>
            <h3>{value}</h3>
            <p style={{ color: strokeColor }}>
              {percent > 50 ? <BsArrowUpRight /> : <BsArrowDownRight />}{' '}
              {change}%
            </p>
          </div>
          <Progress
            type='circle'
            percent={percent}
            width={80}
            strokeColor={strokeColor}
            trailColor='#43474dea'
          />
        </div>
      </div>
    </div>
  );
};

export default StatusCards;
