// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, role, email, id) {
      this.name = name;
      this.role = role;
      this.email= email;
      this.id = id;
      
    }
  
    printInfo() {
      console.log(`Employee's name: ${this.name} `);
      console.log(`Employee's role: ${this.role}`);
      console.log(`Employee's id: ${this.id}`);
      console.log(`Employee's email: ${this.email}`);
    }
  }
  module.exports = Employee;
  