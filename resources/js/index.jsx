import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

// DOM element
if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
