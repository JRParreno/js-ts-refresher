export class Person {
    name: string;
    age: number;
    gender: string;
    address: string;

    constructor(
        name: string,
        age: number,
        gender: string,
        address: string
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getFullName() {
        console.log(`Fullname: ${this.name}, age: ${this.age}`);
    }

    val() {
        console.log(this.age);
    }
}