import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'


render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('container')
);

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Component = require('main-component-file.js'); 

// ReactDOM.render(<Component/>, document.body);

