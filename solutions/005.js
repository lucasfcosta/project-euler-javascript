'use strict';

// Smallest multiple

function divisibleByAll(number) {
    let i = 2;
    while (i <= 20) {
        let result = number % i;

        if (result !== 0) {
            return false;
        }

        i++;
    }

    return true;
}

let n = 20;

while (!divisibleByAll(n)) {
    n += 20;
}

module.exports = n;
