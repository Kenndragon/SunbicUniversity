function validateForm(){
     let v = document.forms["myForm"]["fname"].value;
      if (v == "") {
        alert("First name must be filled out");
        return false;
      }
      let y = document.forms["myForm"]["lname"].value;
      if (y == "") {
        alert("Last name must be filled out");
        return false;
      }
  
      let z = document.forms["myForm"]["email"].value;
      if (z == "") {
        alert("Email must be filled out");
        return false;
      }
      let x = document.forms["myForm"]["phone"].value;
      if (x == "") {
        alert("Phone number must be filled out");
        return false;
      }
  
      let t = document.forms["myForm"]["message"].value;
      if (t == ""){
        alert("Message must be filled out");
        return false;
      }
        alert("Message has been sent");
    }