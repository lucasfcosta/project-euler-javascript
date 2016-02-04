'use strict';

// Special Pythagorean triplet

function calculateResult() {
    for (let a = 1; a < 334; a++) {
        for (let b = a; b < 1000 - a; b++) {
            let c = 1000 - a - b;

            if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                return a * b * c;
            }
        }
    }
}

module.exports = calculateResult();
