
import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
 function Clock1 () {

   const[date,setDate]=useState(new Date());
    
    componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  };

componentWillMount(){
     clearInterval(this.timerID);
};
tick(){
    setDate(new Date());
}


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock  />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);