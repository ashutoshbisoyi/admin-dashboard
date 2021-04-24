import { Col, Row } from 'antd';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';

const ReferalsAndCampaign = () => {
  return (
    <div className='referals-and-campaign panel-card'>
      <div className='top'>
        <span>Referals And Campaign Stats</span>
        <div className='info'>
          <FaPaperPlane className='icon' />
          <div>
            <h4>40 campeign seats in total</h4>
            <p>4 campaign seats in last month</p>
          </div>
        </div>
      </div>
      <div className='main'>
        <Row>
          <Col lg={6}>
            <div className='card'>
              <p>Users Reached</p>
              <span>
                <BsArrowUpRight /> +3.59%
              </span>
              <h3>7956</h3>
            </div>
          </Col>
          <Col lg={6}>
            <div className='card'>
              <p>Users Reached</p>
              <span>
                <BsArrowUpRight /> +3.59%
              </span>
              <h3>7956</h3>
            </div>
          </Col>
          <Col lg={6}>
            <div className='card'>
              <p>Users Reached</p>
              <span>
                <BsArrowUpRight /> +3.59%
              </span>
              <h3>7956</h3>
            </div>
          </Col>
          <Col lg={6}>
            <div className='card' style={{ borderRight: 0 }}>
              <p>Users Reached</p>
              <span>
                <BsArrowUpRight /> +3.59%
              </span>
              <h3>7956</h3>
            </div>
          </Col>
        </Row>
        <div className='btn-group'>
          <button className='start'>Start a new campaign now</button>
          <button>Pause all running campaigns</button>
        </div>
      </div>
    </div>
  );
};

export default ReferalsAndCampaign;
