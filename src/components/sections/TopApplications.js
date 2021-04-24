import { Progress } from 'antd';
import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
const TopApplications = () => {
  return (
    <div className='top-applicaitons panel-card'>
      <div className='top'>
        <span>Total Applications</span>
      </div>
      <div className='main'>
        <ul>
          <li>
            <div className='title'>
              <GoPrimitiveDot className='icon' style={{ color: '#669fe6' }} />{' '}
              Applications
            </div>
            <Progress
              percent={30}
              size='small'
              showInfo={false}
              strokeColor='#669fe6'
              trailColor='#43474dea'
            />
          </li>
          <li>
            <div className='title'>
              <GoPrimitiveDot className='icon' style={{ color: '#0856f7' }} />
              Short Listed
            </div>
            <Progress
              percent={30}
              size='small'
              showInfo={false}
              strokeColor='#0856f7'
              trailColor='#43474dea'
            />
          </li>
          <li>
            <div className='title'>
              <GoPrimitiveDot className='icon' style={{ color: '#FC525F' }} />
              Rejected
            </div>
            <Progress
              percent={30}
              size='small'
              showInfo={false}
              strokeColor='#FC525F'
              trailColor='#43474dea'
            />
          </li>
          <li>
            <div className='title'>
              <GoPrimitiveDot className='icon' style={{ color: '#f5f5f5' }} />{' '}
              On Hold
            </div>
            <Progress
              percent={30}
              size='small'
              showInfo={false}
              strokeColor='#f5f5f5'
              trailColor='#43474dea'
            />
          </li>
          <li>
            <div className='title'>
              <GoPrimitiveDot className='icon' style={{ color: '#183998' }} />{' '}
              Finished
            </div>
            <Progress
              percent={30}
              size='small'
              showInfo={false}
              strokeColor='#183998'
              trailColor='#43474dea'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopApplications;
