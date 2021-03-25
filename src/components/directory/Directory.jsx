import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: 'hats',
      imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
    },
    {
      title: 'jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
    },
    {
      title: 'sneakers',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
    },
    {
      title: 'womens',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
    },
    {
      title: 'mens',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imgUrl, size }) => (
        <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
