import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { SiGooglemessages } from 'react-icons/si';
import img from '../../assets/illustration.png';

const applicants = [
  {
    name: 'Rosie Metts',
    role: 'IOS Developer',
  },
  {
    name: 'James Scott',
    role: 'NodeJS Developer',
  },
  {
    name: 'Jamie Laurenson',
    role: 'Marketing Manager',
  },
  {
    name: 'Elizabeth Hurton',
    role: 'Junior UX Designer',
  },
  {
    name: 'Danny Watson',
    role: 'IOS Developer',
  },
  {
    name: 'Reha Scarlett',
    role: 'IOS Developer',
  },
];
const NewApplications = () => {
  return (
    <div className='new-applications'>
      <div>
        <div className='message'>
          <span>
            Hello John Bayer, <br />
            You have New Application Today
          </span>
          <img src={img} alt='illustration' />
        </div>
        <div className='tab'>
          <div className='top'>
            <h3>New Applicants</h3>
            <BsArrowBarRight />
          </div>
          <div className='main'>
            <ul>
              {applicants.map((value, index) => {
                return (
                  <li key={index}>
                    <div className='user-details'>
                      <AiOutlineUser className='icon' />
                      <div className='details'>
                        <h4>{value.name}</h4>
                        <span>{value.role}</span>
                      </div>
                    </div>
                    <div className='action'>
                      <div className='icon-container'>
                        <SiGooglemessages className='icon' />
                      </div>
                      <div className='icon-container'>
                        <BiPhoneCall className='icon' />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewApplications;
