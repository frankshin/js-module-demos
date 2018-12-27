

import React from 'react';
import ReactDOM from 'react-dom';

import { Hello} from './add';
// class Hello extends React.Component {
//     render() {
//         return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//     }
// }
ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root')
);