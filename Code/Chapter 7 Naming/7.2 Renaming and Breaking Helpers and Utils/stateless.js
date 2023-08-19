class UserScore {  
  // This is anemic class and should have better protocol
  
  constructor(name, lastname, points) {
    this._name = name;
    this._lastname = lastname;
    this._points = points;
  }
  name() {
    return this._name;
  }
  lastname() {
    return this._lastname;
  }
  points() {
    return this._points;
  }
}

class FullNameFormatter {      
  fullname(userscore) {
    return `${userscore.name()} ${userscore.lastname()}`;
  }
}

class CategoryCalculator {
  display(userscore) {
    return userscore.points() > 70 ? 'A' : 'B';
  }
}  
  
let alice = new UserScore('Alice', 'Gray', 78);

const fullName = new FullNameFormatter().fullname(alice);
const category = new CategoryCalculator().display(alice);