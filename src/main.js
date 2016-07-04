import React from 'react'
import ReactDOM from 'react-dom'
import routes from './pages/routes';
import global from 'global.scss';

const content = document.createElement('div');
document.body.appendChild(content);

ReactDOM.render(routes, content);