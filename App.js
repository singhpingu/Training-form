import React , { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
    }
  }
  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
      <p>Contact Me</p>
      <div>
      <form action="#" >
  <label>First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your name.."
    value={this.state.fname}
    onChange={e => this.setState({ fname: e.target.value })}
  />
  <label>Last Name</label>
  <input type="text" id="lname" name="lastname" placeholder="Your last name.."
    value={this.state.lname}
    onChange={e => this.setState({ lname: e.target.value })}
  />


  <label>Email</label>
  <input type="email" id="email" name="email" placeholder="Your email"
    value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}
  />


  <label>Phone</label>
  <input type="tel" id="phone" name="phone" placeholder="Your phone"
    onChange={e => this.setState({ phone: e.target.value })}
    value={this.state.message}
  />
  <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
</form >
      </div>
      </div>
    );
  }
}

export default App;
