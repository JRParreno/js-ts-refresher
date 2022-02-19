import { Person } from "./Person";
import { Student } from "./Student";
import { StudentWOExtends } from "./StudentWOExtends";

const student = new Student(
    "2015-105868",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

console.log(student);

const test = new StudentWOExtends(
    "2015-105968",
    new Person("jr", 20, 'male', 'pasay')
);

console.log(test.person.getFullName());