
    function validate(email){
        var mail1=document.getElementById("email");
        var regx=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if(email.value==""){
            alert("Enter the email id");
            element.id = "newId";
            return false;
        }
        else if(email.value.match(validRegex)) {
             alert("Valid Mail Id");
            return true;} 
       else {
           alert("Invalid Mail Id");
           element.id = "newId";
          return false;
       }
    }

  


   
