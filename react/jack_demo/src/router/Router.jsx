import {BrowserRouter, Route, Router} from 'react-router-dom';
import React from 'react'
import Index from '../view/index/index';
import Login from '../view/login/login.jsx';

class Routers extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>
            <BrowserRouter>
                <div>
                    <Route path="/index" component={Index}/>
                    <Route path="/login" component={Login}/>
                </div>
            </BrowserRouter>
        </div>
    }
}

export default Routers;