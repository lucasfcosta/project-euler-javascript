'use strict';

// Largest prime factor

let number = 600851475143;

function largestPrimeFactorOf(n) {
    let factor = 2;

    while (factor <= n) {
        if (n % factor === 0) {
            n /= factor;
        } else {
            factor++;
        }
    }

    return factor;
}

module.exports = largestPrimeFactorOf(number);
