// ---------------- TASK 3: Lambdasian ----------------
class Lambdasian {
    constructor({ name, age, location }) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// ---------------- TASK 4: Instructor ----------------
class Instructor extends Lambdasian {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
        super({ name, age, location });
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    // STRETCH: Adjust student grade randomly between -10 and +10
    adjustGrade(student) {
        let change = Math.floor(Math.random() * 21) - 10;
        student.grade = Math.min(100, Math.max(0, student.grade + change));
        console.log(`${this.name} adjusted ${student.name}'s grade by ${change} points. New grade: ${student.grade}`);
    }
}

// ---------------- TASK 5: Student ----------------
class Student extends Lambdasian {
    constructor({ name, age, location, previousBackground, className, favSubjects, grade }) {
        super({ name, age, location });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }

    listSubjects() {
        return `Loving ${this.favSubjects.join(", ")}!`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    // STRETCH: Graduate logic
    graduate(instructor) {
        console.log(`Checking if ${this.name} can graduate...`);
        while (this.grade < 70) {
            instructor.adjustGrade(this);
        }
        return `🎓 ${this.name} has graduated with a final grade of ${this.grade}!`;
    }
}

// ---------------- TASK 6: ProjectManager ----------------
class ProjectManager extends Instructor {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor }) {
        super({ name, age, location, specialty, favLanguage, catchPhrase });
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



//consola
// Create Instructors
let sean = new Instructor({
    name: "Sean",
    age: 35,
    location: "New York",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Don't forget the homies!"
});

let mikael = new Instructor({
    name: "Mikael",
    age: 40,
    location: "Madrid",
    specialty: "Node.js",
    favLanguage: "TypeScript",
    catchPhrase: "Keep pushing forward!"
});

// Create Students
let raul = new Student({
    name: "Raúl",
    age: 22,
    location: "Granada",
    previousBackground: "Graphic Designer",
    className: "CS132",
    favSubjects: ["HTML", "CSS", "JavaScript"],
    grade: 60 
});

let maria = new Student({
    name: "María",
    age: 25,
    location: "Sevilla",
    previousBackground: "Marketing",
    className: "CS133",
    favSubjects: ["Python", "Django", "SQL"],
    grade: 40
});

// Create Project Managers
let sofia = new ProjectManager({
    name: "Sofía",
    age: 30,
    location: "Barcelona",
    specialty: "Full Stack",
    favLanguage: "JavaScript",
    catchPhrase: "Code is love, code is life.",
    gradClassName: "CS1",
    favInstructor: "Sean"
});

console.log(raul.graduate(sean));
console.log(maria.graduate(mikael));