class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  email() {
    return this.email;
    // might be null    
  }
  
}

// We cannot use safely person.email()
// We need to check for null explicitly