class Employee {
    
    //this code is being used to get the user information and return the information with the right input. The user 
    //has to enter vaules for each one
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "Employee";
    }
  
  }
  
  module.exports = Employee;
  