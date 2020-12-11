// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(name, role, email, id);
    this.school = school;
 }
//   useHorn() {
//     console.log(this.sound);
//   }
 
}



const boat = new Intern();

console.log("---Intern---");
// boat.printInfo();
// boat.useHorn();
// boat.crewSoundOff();
