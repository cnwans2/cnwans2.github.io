const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
    
}
//this code is being used to get the user information and return the information with the right input. The user 
    //has to enter vaules for each one
module.exports = Engineer;
