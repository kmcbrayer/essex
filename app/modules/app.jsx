'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header.jsx';

class App extends React.Component {
    render() {
        return <Header />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
