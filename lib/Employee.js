// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, position, id, email) {
      this.name = name;
      this.position = position;
      this.id = id;
      this.email = email;
      
    }
  
    printInfo() {
      console.log(`Employee's name: ${this.name} `);
      console.log(`Employee's position: ${this.position}`);
      console.log(`Employee's id: ${this.id}`);
      console.log(`Employee's email: ${this.email}`);
    }
  }
  module.exports = Employee;
  