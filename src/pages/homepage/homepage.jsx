import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/Directory';

const Home = () => {
  return (
    <div className="homepage">
      <Directory />
      {/* <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="sutitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="sutitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="sutitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="sutitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="sutitle">SHOP NOW</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
