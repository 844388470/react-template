import React from 'react'
import ReactDOM from 'react-dom';
import Routes from '@/config/router';
require('./style/index.css');

console.log(Routes)

ReactDOM.render(
    <Routes />,
    document.getElementById('app'),
)