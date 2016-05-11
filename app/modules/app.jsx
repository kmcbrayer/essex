'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({
    render: function () {
        return (
            <div>Hey dudes</div>
        )
    }
});

ReactDOM.render(
    <Test />,
    document.getElementById('content')
);
