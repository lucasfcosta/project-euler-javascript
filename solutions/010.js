
'use strict';

// Summation of primes


// This solution uses the Sieve of Eratosthenes algorithm.
// Please see: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes to understand how this works

// Prime Number to use as limit
let limit = 2000000;

// Holds the sum
let total = 0;

// The indexes of this array will be used to identify prime numbers
let primeNumbers = [];

// Current prime
let p = 2;

// The biggest number we've gotta use to find its multiples is the floor of the square root of the number used as limit
let upperLimit = Math.floor(Math.sqrt(limit));

while (p <= upperLimit) {
    // Here we mark every index which is a multiple of P as false
    for (let i = p + p; i < limit; i += p) {
        primeNumbers[i] = false;
    }

    // Now we find the next non-marked number
    // It is a prime and we will mark all its multiples
    for (let j = p + 1; j < limit; j++) {
        if (primeNumbers[j] === undefined) {
            p = j;
            break;
        }
    }
}

// Now every non-marked number is a prime number
for (let k = 2; k < limit; k++) {
    if (primeNumbers[k] === undefined) {
        total += k;
    }
}

module.exports = total;
