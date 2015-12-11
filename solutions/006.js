'use strict';

// Sum square difference

function sumSquares() {
    let squareSum = 0;

    for (let i = 1; i <= 100; i++) {
        squareSum += i * i;
    }

    return squareSum;
}

function squareOfSum() {
    let result = 0;

    for (let i = 1; i <= 100; i++) {
        result += i;
    }

    return result * result;
}

module.exports = squareOfSum() - sumSquares();
