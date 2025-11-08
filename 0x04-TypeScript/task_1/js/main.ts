 // Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding extra properties like 'contract'
}

// Example: Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2: Director interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example: Director object
const director1: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'Paris',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3: printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function using object destructuring and exact return format
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));

// ---------------------------------------------
// Task 4: StudentClass and related interfaces
// ---------------------------------------------

// Interface describing the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the Student class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('Alice', 'Brown');
console.log(student.displayName()); // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working

