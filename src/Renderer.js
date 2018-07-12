import React, { Component } from 'react';

import ArithmeticService from './arithmeticService';

class Renderer extends Component {
    render() {
        const service = new ArithmeticService();
        const a = 16, b = 2;
        const title = this.props.children;
        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    <li>a = {a}</li>
                    <li>b = {b}</li>
                    <li>a + b = {service.sum(a, b)}</li>
                    <li>a - b = {service.difference(a, b)}</li>
                    <li>a * b = {service.multiplication(a, b)}</li>
                    <li>a / b = {service.division(a, b)}</li>
                    <li>a ^ b = {service.power(a, b)}</li>
                    <li>SquareRoot(a) = {service.squareRoot(a)}</li>
                </ul>
            </div>
        );
    }
}

export default Renderer;