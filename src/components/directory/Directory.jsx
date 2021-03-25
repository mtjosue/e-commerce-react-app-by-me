import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: 'hats',
      imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: 'jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'jackets',
    },
    {
      title: 'sneakers',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'sneakers',
    },
    {
      title: 'womens',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'womens',
    },
    {
      title: 'mens',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'mens',
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
