import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    'div', 
    { id: 'parent' }, 
    React.createElement('div', { id: 'child' }, 
    [
        React.createElement('h1', {}, 'This is Namaste React 🚀'),
        React.createElement('h2', {}, 'Prashant Chakraborty')
    ]),
    React.createElement('div', { id: 'child'}, 
    [
        React.createElement('h1', {}, 'h1 tag here'),
        React.createElement('h2', {}, 'h2 tag here')
    ]),
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);