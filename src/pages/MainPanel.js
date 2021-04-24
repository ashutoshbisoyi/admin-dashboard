import React from 'react';
import { Col, Row } from 'antd';
import StatusCards from '../components/cards/StatusCards';
import ApplicationRecieved from '../components/sections/ApplicationRecieved';
import NewApplications from '../components/sections/NewApplications';
import OpenPositions from '../components/sections/OpenPositions';
import ReferalsAndCampaign from '../components/sections/ReferalsAndCampaign';
import TopApplications from '../components/sections/TopApplications';

const MainPanel = () => {
  return (
    <div className='mainpanel'>
      <Row gutter={10}>
        <Col lg={18}>
          <Row gutter={10}>
            <Col lg={8}>
              <StatusCards value={7956} percent={70} change='+3.59' />
            </Col>
            <Col lg={8}>
              <StatusCards value={4658} percent={60} change='+0.6' />
            </Col>
            <Col lg={8}>
              <StatusCards value={1501} percent={40} change='-0.4' />
            </Col>
            <Col lg={16}>
              <ApplicationRecieved />
            </Col>
            <Col lg={8}>
              <TopApplications />
            </Col>
            <Col lg={16}>
              <ReferalsAndCampaign />
            </Col>
            <Col lg={8}>
              <OpenPositions />
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <NewApplications />
        </Col>
      </Row>
    </div>
  );
};

export default MainPanel;
