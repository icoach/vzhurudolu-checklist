//
// VzhuruDolu: Checklist App
//
// @author: Martin Staněk (github: @icoach)
// -------------------

var React = require('react')
var ReactDOM = require('react-dom')

var Checklist = require('./components/checklist.jsx')

// requires id="vd-checklist-app" to be in the template
ReactDOM.render(
    React.createElement(Checklist),
    document.querySelector('#vd-checklist-app')
);
