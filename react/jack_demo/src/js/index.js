import React from 'react';
import ReactDOM from 'react-dom';

import Routers from '../router/Router.jsx'
import MyLayout from '../js/layout/Layout.jsx';

ReactDOM.render(<MyLayout/>,document.getElementById('app'));
ReactDOM.render(<Routers/>,document.getElementById('content'));