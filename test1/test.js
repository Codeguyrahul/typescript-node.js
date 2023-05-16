var Student = /** @class */ (function () {
    function Student(name, age, Class, Stream) {
        this.name = name;
        this.age = age;
        this.Class = Class;
        this.Stream = Stream;
    }
    Student.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
        console.log("Class: ".concat(this.Class));
        console.log("Stream: ".concat(this.Stream));
    };
    return Student;
}());
// Create an instance of the Student class
var student = new Student("rahul kumar", 19, "12th", "Science");
// Display the student's details
student.displayDetails();
