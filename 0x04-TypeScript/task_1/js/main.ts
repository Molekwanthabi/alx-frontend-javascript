 // Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows extra properties like 'contract'
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

// Extend Teacher interface → Director
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

// ---------------------------------------------
// Task 3: Printing teachers
// ---------------------------------------------

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function definition using standard syntax
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

