import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import Home from '../src/Home';
import About from '../src/About';
import Contact from '../src/Contact';
//import Album from '../src/Album';

function App() {
  return (
      <Router>
    <div className="App">
    <h2>React Router</h2>
    <nav>
        <Link to={'/Home'}>Home</Link>
        <Link to={'/About'}>Form</Link>
        <Link to={'/COntact'}>Contact</Link>
        
    </nav>
    <hr/>
    <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
