
const parent = React.createElement(
    'div', 
    { id: 'parent' }, 
    React.createElement('div', { id: 'child' }, 
    [
        React.createElement('h1', {}, 'h1 tag here'),
        React.createElement('h2', {}, 'h2 tag here')
    ]),
    React.createElement('div', { id: 'child'}, 
    [
        React.createElement('h1', {}, 'h1 tag here'),
        React.createElement('h2', {}, 'h2 tag here')
    ]),
);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);