const numbers = [1, 2, 3, 4];

let num1: number;
let num2: number = 0;
let num3: number;
let num4: number;

[num1, , num3, num4] = numbers;
console.log(num1, num3, num4);

const sampleMessage = {
    title: "Title here",
    message: "Hello World"
}

const { message, title } = sampleMessage;
console.log(sampleMessage.title, sampleMessage.message);
