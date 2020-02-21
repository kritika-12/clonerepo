import React from 'react';
import { BrowserRouter as Router,Link,Switch,Route } from   'react-router-dom';
import './App.css';
import Arithmeticoperation from './Arithmeticoperation';
import Comparevalues from './Comparevalues';
import Validatecounter from './Validatecounter';

function App() {
  return (
      <Router>
    <div className="App">
      <h1>Link to all my assignment</h1>
      <nav>
          <Link to={'Arithmeticoperation'}>Arithmetic Assignment</Link>
          <Link to={'Comparevalues'}>Compare Values</Link>
          <Link to={'Validationcounter'}>Validation Counter</Link>
      </nav>
      <hr/>
      <Switch>
          <Route path='/Arithmeticoperation' component={Arithmeticoperation}/>
          <Route path='/Comparevalues' component={Comparevalues}/>
          <Route path='/Validationcounter' component={Validatecounter}/>
 </Switch>
    </div>
    </Router>
  );
}

export default App;