import React from 'react';
import Places from '../places/places';
import Header from '../header/header';

const MainPage = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Places />
    </div>
  );
};

export default MainPage;
