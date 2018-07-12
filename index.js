import ArithmeticService from './src/arithmeticService';

let a = 16, b = 2;
let service = new ArithmeticService();

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", service.sum(a, b));
console.log("a - b = ", service.difference(a, b));
console.log("a * b = ", service.multiplication(a, b));
console.log("a / b = ", service.division(a, b));
console.log("a ^ b = ", service.power(a, b));
console.log("Square root of a equals ", service.squareRoot(a));