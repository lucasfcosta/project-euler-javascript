'use strict';

// Special Pythagorean triplet

function calculateResult() {
    for (let i = 0; i < 500; i++) {
        let squareA = Math.pow(i, 2);
        for (let j = 0; j < 500; j++) {
            let squareB = Math.pow(j, 2);
            for (let k = 0; k < 500; k++) {
                let squareC = Math.pow(k, 2);

                if ((squareA + squareB) === squareC && (i + j + k) === 1000) {
                    return i * j * k;
                }

            }
        }
    }
}

module.exports = calculateResult();
