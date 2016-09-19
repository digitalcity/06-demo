import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Marked from './Marked';
import 'highlight.js/styles/github.css';
import './main.css';

ReactDOM.render(<Routers />, document.getElementById('app'));
