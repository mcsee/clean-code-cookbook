class Teacher {
    constructor(fullName) {
        this.fullName = fullName;
    }
}

class School {
    constructor(address) {
        this.address = address;
    }
}

class Student {
    constructor(firstName, lastName, teacher, school) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.teacher = teacher;
        this.school = school;
    }
}

// The ids are no longer needed since they don’t exist in the real world.
// If you need to expose a School to an external API or a database,
// another object (not school)
// will keep the mapping externalId<->school and so on
