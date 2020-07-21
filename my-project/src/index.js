import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 const rootElement = document.getElementById('root');
// const elementw = document.createElement('div');
// elementw.innerHTML = 'Hello world!';
// elementw.className = 'container';

// rootElement.appendChild(element);

const element = React.createElement('div', {className: 'container', children: ['Hello world!', 'Goodbye world!!!']});
console.log(element);
ReactDOM.render(element, rootElement);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
