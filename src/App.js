import React from 'react';
import './App.css';
import axios from 'axios';

const API_PATH = 'C:/Users/yasha/OneDrive/Desktop/Drughelp/Form/src/api/backend/actions.php';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      datasave: false,
      error: null
    }
  }
  handleFormSubmit( event ) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          datasave: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }
    
     validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
      }
  
      if (typeof input["phone"] !== "undefined") {
          
        var pattern1 = new RegExp(/^[0-9\b]+$/);
        if (!pattern1.test(input["phone"])) {
          isValid = false;
          errors["phone"] = "Please enter only number.";
        }else if(input["phone"].length !== 10){
          isValid = false;
          errors["phone"] = "Please enter valid phone number.";
        }
      }
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h1>React Form</h1>
        <form action="#">
  
          <div class="form-group">
          
            <label for="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={e => this.setState({ name: e.target.value })}
              class="form-control" 
              placeholder="Enter name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={e => this.setState({ email: e.target.value })}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
 
          <div class="form-group">
            <label for="Phone">Phone:</label>
            <input 
              type="text" 
              name="phone" 
              value={this.state.input.phone}
              onChange={e => this.setState({ phone: e.target.value })}
              class="form-control" 
              placeholder="Enter phone" 
              id="phone" />
  
              <div className="text-danger">{this.state.errors.phone}</div>
          </div>              
          <input type="submit" value="Submit" class="btn btn-success" onClick={e => this.handleFormSubmit(e)} />
          <div>
          {this.state.datasave &&
          <div>Thank you for contcting us.</div>
          }
          </div>
        </form>
      </div>
    );
  }
}
export default App;