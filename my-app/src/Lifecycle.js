import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleFirstNameChange = (e) => this.setState({ firstName: e.target.value });
  handleLastNameChange = (e) => this.setState({ lastName: e.target.value });
  componentDidMount(){
      document.title=`${this.state.firstName}`;
      document.title=`${this.state.lastName}`;
      
  }

  render() {
    return (
      <div>
      firstName:  <input value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="firstname"/><br /><br/>
        lastName: <input value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="lastname"/>
        <p>
          <span>{this.state.firstName} {this.state.lastName}</span>
        </p>
      </div>
    );
  }
}



