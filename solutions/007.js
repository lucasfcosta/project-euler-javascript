'use strict';

// 10001st prime

function isPrime(number) {
    for (let i = number - 1; i > 1; i--) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// This holds information about the last prime
let currentPrime = {index: 6, val: 13};

let testNumber = 14;
while (currentPrime.index !== 10001) {

    if(isPrime(testNumber)) {
        currentPrime.index++;
        currentPrime.val = testNumber;
    }

    testNumber++;
}

module.exports = currentPrime.val;
