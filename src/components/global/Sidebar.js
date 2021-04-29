import React, { useState } from 'react';
import useWindowDimensions from '../../functions/useWindowDimensions';
import { Layout, Menu } from 'antd';
import logo from '../../assets/logo.svg';
import { AiFillHome, AiFillFolder, AiFillCalendar } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { BiLogOut, BiMessageDetail } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiGalleryLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout; //ant layout

const Sidebar = () => {
  const [collapsed, setcollapsed] = useState(false);
  const { width } = useWindowDimensions();

  const location = useLocation().pathname;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => {
        setcollapsed(!collapsed);
      }}
      breakpoint='lg'
      collapsedWidth={width < 576 ? '0' : '81'}
      className='sidebar'
    >
      <div className='logo-container'>
        <img src={logo} alt='company logo' className='logo' />
      </div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={[`${location}`]}>
        <Menu.Item key='/' icon={<AiFillHome className='icon' />}>
          Home
          <Link to='/' />
        </Menu.Item>
        <Menu.Item key='/gallery' icon={<RiGalleryLine className='icon' />}>
          Gallery
          <Link to='/gallery' />
        </Menu.Item>
        <Menu.Item key='3' icon={<GoGraph className='icon' />}>
          Data
        </Menu.Item>
        <Menu.Item key='4' icon={<AiFillFolder className='icon' />}>
          Modules
        </Menu.Item>
        <Menu.Item key='5' icon={<AiFillCalendar className='icon' />}>
          Schedule
        </Menu.Item>
        <Menu.Item key='6' icon={<BsFillPeopleFill className='icon' />}>
          Members
        </Menu.Item>
        <Menu.Item key='7' icon={<BiMessageDetail className='icon' />}>
          Notification
        </Menu.Item>
        <Menu.Item key='8' icon={<BiLogOut className='icon' />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
