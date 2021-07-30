function validate(){
function handleChange(props) {
    let input = props.state.input;
    input[props.target.name] = props.target.value;
  
    props.setState({
      input
    });
  }
function handleSubmit(props) {
    props.preventDefault();
  
    if(props.validate()){
        console.log(props.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["phone"] = "";
        input["comment"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
}
function validation(props) {
    let input = props.state.input;
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

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your comment.";
    }

    this.setState({
      errors: errors
    });

    return isValid;

}
}
export default validate;