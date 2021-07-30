import React , { Component } from 'react';
function handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
  export default handleChange;
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["phone"] = "";
        input["comment"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
}
export default handleChange;
export default handleSubmit;