// CODE here for your Lambda Classes
//Person Class (Base-class)
class Person {
    constructor(personAtts) {
    this.name = personAtts.name;
    this.age = personAtts.age;
    this.location = personAtts.location;
    this.gender = personAtts.gender;
    };

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    };
};

//Instructor Class
class Instructor extends Person {
    constructor(instructorAtts) {
        super(instructorAtts);
        this.specialty = instructorAtts.specialty;
        this.favLanguage = instructorAtts.favLanguage;
        this.catchPhrase = instructorAtts.catchPhrase;
    };

    demo(subject) {
        return `Today we're going to learn about ${subject}`;
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score in ${subject}.`
    };
};

//Student Class
class Student extends Person {
    constructor(studentAtts) {
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
    };
    listsSubjects() {
        this.favSubjects.map(item => console.log(item));
    };
    PRAssignment() {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge() {
        return `${this.name} has begun the sprint challenge for ${subject}.`;
    };
};

//PM Class
class ProjectManager extends Person {
    constructor(pmAtts) {
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.gradClassName;
    };
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, '@channel It's STANDY TIMES!'`
    };
    debugsCode(){
        return `${this.name} debugs ${student.name}'s code on ${subject}. Earn those dollars, ${this.name}!`
    };
};