import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/mocks';


ReactDOM.render(
    <App
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
