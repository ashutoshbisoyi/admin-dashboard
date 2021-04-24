import React from 'react';
import { Col, Row } from 'antd';
import GallerySider from '../components/global/GallerySider';
import GalleryMainPanel from '../components/sections/GalleryMainPanel';

const Gallery = () => {
  return (
    <div className='gallery'>
      <Row>
        <Col lg={6}>
          <GallerySider />
        </Col>
        <Col lg={18}>
          <GalleryMainPanel />
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
