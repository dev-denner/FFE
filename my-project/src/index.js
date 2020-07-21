import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 const rootElement = document.getElementById('root');
// const elementw = document.createElement('div');
// elementw.innerHTML = 'Hello world!';
// elementw.className = 'container';

const helloWorld = 'Hello world!';
const props ={
  className: 'main-title',
  children: [ helloWorld, 'Goodbye world']
};
const MyComponent = () => <h1 className='my-title' {...props}></h1>

ReactDOM.render(<MyComponent />, rootElement);

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
