import Component from './index/index';
import React from 'react';
import ReactDOM from 'react-dom';

window.onload = () => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#example')
  );
};
