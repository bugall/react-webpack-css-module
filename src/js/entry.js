import commonCss from '../css/common.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index/index';
console.log(Index);

window.onload = () => {
  ReactDOM.render(
    <Index/>,
    document.querySelector('#example')
  );
};
