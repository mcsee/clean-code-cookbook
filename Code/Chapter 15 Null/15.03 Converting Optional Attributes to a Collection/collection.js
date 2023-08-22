class Person {
  constructor(name, emails) {
    this.name = name;
    this.emails = emails;
    // emails should always be a collection. 
    // even an empty one
    // You can check it here
    if (emails.length > 1) {
       throw new Error("Emails collection can have at most one element.");
  }
    
  emails() {
    return this.emails;
  }  
  // You can mutate the emails since they are not essential
  
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

// You can iterate the person.emails() 
// in a loop without checking for null 