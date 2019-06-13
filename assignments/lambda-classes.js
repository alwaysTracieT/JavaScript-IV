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
}

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
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun the sprint challenge for ${subject}.`;
    };
}

//PM Class
class ProjectManager extends Instructor {
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
}


const darren = new ProjectManager({
    name: 'Darren',
    location: 'DC',
    age: 23,
    favLanguage: 'LESS',
    specialty: 'Full stack web dev',
    catchPhrase: `gang gang`,
    gradClassName: 'WEB18',
    favInstructor: 'Josh'
  });

  const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});
const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});


const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

  console.log(darren.standUp("#webdarren"));
  console.log(isaiah.PRAssignment("JS IV"));
  console.log(dan.catchPhrase);
  console.log(brandon.catchPhrase);
  console.log(darren.catchPhrase);
  console.log(brandon.age);