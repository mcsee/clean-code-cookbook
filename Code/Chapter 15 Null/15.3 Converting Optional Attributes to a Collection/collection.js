class Person {
  constructor(name, emails) {
    this.name = name;
    this.emails = emails;
    // emails should always be a collection. 
    // even an empty one
    // We can check it here
  }
    
  emails() {
    return this.emails;
  }
  
  // We can mutate the emails since they are not essential
  
  addEmail(email) {
    this.emails.push(email);
  }
  
  removeEmail(email) {
    const index = this.emails.indexOf(email);
    if (index !== -1) {
      this.emails.splice(index, 1);
    }
  }
}

// we can iterate the person.emails() 
// in a loop without checking for null 