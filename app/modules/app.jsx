'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Test2 from './components/Test.jsx';

class Test extends React.Component{
    render() {
        return <Test2 />;
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('content')
);
