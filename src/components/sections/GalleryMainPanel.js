import { Avatar } from 'antd';
import React, { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const galleryData = [
  {
    url:
      'https://images.unsplash.com/photo-1575139488326-d73dfafe2f5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHwxfDB8cHVycGxlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    title: 'Your limitation is your Imagination',
  },
  {
    url:
      'https://images.unsplash.com/photo-1532019333101-b0f43c16a912?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbHxlbnwwfDB8MHx0ZWFsfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'video',
    title: 'Greate things never come from comfort zone',
  },
  {
    url:
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'video',
    title: 'Drim it Wish it Do it',
  },
  {
    url:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'article',
    title: '',
  },
  {
    url:
      'https://images.unsplash.com/photo-1519770340285-c801df5ff3db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    title: '',
  },
  {
    url:
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'video',
    title: '',
  },
  {
    url:
      'https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'podcast',
    title: '',
  },
  {
    url:
      'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    title: '',
  },
  {
    url:
      'https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1pbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'podcast',
    title: '',
  },
];
const GalleryMainPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='gallery-mainpanel'>
      <div className='top'>
        <h1>Motivation</h1>
        <Avatar.Group>
          <Avatar
            size='large'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeNr1-vSeAA27f-UXwXKfkNy-7QoGz4QmjPCabheZURu4j8_qoySTOKzIJr7RP4oPx2I&usqp=CAU'
          />
          <Avatar
            size='large'
            src='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'
          />
          <Avatar
            size='large'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0pHtVBVeyi8OjaGf1tw1IY8ctQfkAedvt8cIZb5kEQtxmp-jtxFrDp0jGETAeohYn5k&usqp=CAU'
          />
          <Avatar
            size='large'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmLEM7M9WzpqFLYb7GhrP76gpZ4gFK1mdvJL2MGMDJBhxTD8tEB9fLoHaMN87fxYQbJs&usqp=CAU'
          />
        </Avatar.Group>
      </div>
      <div className='filter'>
        <button
          className={searchTerm === '' ? 'active' : ''}
          onClick={() => setSearchTerm('')}
        >
          All
        </button>
        <button
          className={searchTerm === 'article' ? 'active' : ''}
          onClick={() => setSearchTerm('article')}
        >
          Articles
        </button>
        <button
          className={searchTerm === 'podcast' ? 'active' : ''}
          onClick={() => setSearchTerm('podcast')}
        >
          Podcast
        </button>
        <button
          className={searchTerm === 'video' ? 'active' : ''}
          onClick={() => setSearchTerm('video')}
        >
          Video
        </button>
        <button className='btn'>Discover</button>
      </div>
      <div className='gallery'>
        {galleryData
          .filter((value) => value.type.includes(searchTerm))
          .map((value, index) => {
            const bgStyle = {
              backgroundImage: `url(${value.url})`,
            };
            return (
              <div className='gallery-item' style={bgStyle}>
                <h3>{value.title}</h3>
                {value.type === 'video' && (
                  <AiFillPlayCircle className='icon' />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GalleryMainPanel;
