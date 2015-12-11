'use strict';

// 10001st prime

function isPrime(number) {
    for (let i = 2; i < number - 1; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// This holds information about the last prime
let currentPrime = {index: 1, val: 2};

let testNumber = 3;

while (currentPrime.index !== 10001) {

    if (isPrime(testNumber)) {
        currentPrime.index++;
        currentPrime.val = testNumber;
    }

    testNumber += 2;
}

module.exports = currentPrime.val;
