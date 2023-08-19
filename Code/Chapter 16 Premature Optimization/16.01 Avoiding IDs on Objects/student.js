class Teacher {
    static getByID(id) {
        // go to the coupled database
    }

    constructor(id, fullName) {
        this.id = id;
        this.fullName = fullName;
    }
}

class School {
    static getByID(id) {
        // go to the coupled database
    }

    constructor(id, address) {
        this.id = id;
        this.address = address;
    }
}

class Student {
    constructor(firstName, lastName, id, teacherId, schoolId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.teacherId = teacherId;
        this.schoolId = schoolId;
    }

    school() {
        return School.getById(this.schoolId);
    }

    teacher() {
        return Teacher.getById(this.teacherId);
    }
}


 