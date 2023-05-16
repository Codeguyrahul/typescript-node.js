class Student {
     name: string;
     age: number;
     Class: string;
     Stream:string;
  
    constructor(name: string, age: number, Class: string , Stream: string) {
      this.name = name;
      this.age = age;
      this.Class = Class;
      this.Stream=Stream;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Class: ${this.Class}`);
      console.log(`Stream: ${this.Stream}`); 
    }
  }
  
  // Create an instance of the Student class
  const student = new Student("rahul kumar", 19, "12th" ,"Science");
  
  // Display the student's details
  student.displayDetails();
  