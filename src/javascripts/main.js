
var React = require('react');
var ReactDOM = require('react-dom');
var Checklist = require('./components/checklist.jsx');

ReactDOM.render(
    React.createElement(Checklist),
    document.querySelector('#app')
);