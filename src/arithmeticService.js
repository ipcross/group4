export default class ArithmeticService {
    sum(a, b) {
        return a + b;
    }

    difference(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        return a / b;
    }

    power(a, b) {
        return Math.pow(a, b);
    }

    squareRoot(a) {
        return Math.sqrt(a);
    }
}