import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Greeting from './Hooks';
//import Greeting from './Lifecycle';
//import NameForm from './NameForm';
//import NameForm2 from './NameForm2';
//import Effect from './Effect';
// import Reduce from './Reduce';
//import Refer from './Refer';
//import Context from './Context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Greeting />, document.getElementById('root'));
//ReactDOM.render(<Greeting />, document.getElementById('root'));
//ReactDOM.render(<NameForm />, document.getElementById('root'));
//ReactDOM.render(<NameForm2 />, document.getElementById('root'));
//ReactDOM.render(<Effect />, document.getElementById('root'));
//ReactDOM.render(<Reduce />, document.getElementById('root'));
//ReactDOM.render(<Refer />, document.getElementById('root'));
//ReactDOM.render(<Context />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
