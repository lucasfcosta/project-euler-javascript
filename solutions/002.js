'use strict';

// Even Fibonacci numbers

let sum = 0;

function nextFib(n1, n2) {
    if (n1 % 2 === 0) {
        sum += n1;
    }
    
    if (n1 <= 4000000) {
        nextFib(n2, n1+n2);
    }
}

nextFib(1, 2);

module.exports = sum;
