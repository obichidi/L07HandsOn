function regexChecker() {
  
      
      let firstName = document.getElementById("first").value;
      let lastName = document.getElementById("last").value;
      let regexName = /^[A-Z][a-z]+/g;

    if(firstName.match(regexName) && firstName.length >1){
    if(lastName.match(regexName) && lastName.length >1){
      
      alert ("Yay! Your inputs were all correct!");
    }
    }
  
  else {
       alert ("Oh no! Thats an invalid format!");
    }
  }

  
  
    
