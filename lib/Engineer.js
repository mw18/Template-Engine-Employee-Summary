// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github ) {
    super(name, role, email, id);
    this.github = github;
 }
//   useHorn() {
//     console.log(this.sound);
//   }
 
}



const boat = new Engineer();

console.log("---Engineer---");
// boat.printInfo();
// boat.useHorn();
// boat.crewSoundOff();
