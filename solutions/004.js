'use strict';

// Largest palindrome product

function largestPalindrome(digits) {
    let n1 = parseInt('9'.repeat(digits), 10);
    let n2 = n1;

    let result = 0;

    for (let i = n1; i > 0; i--) {
        for (let j = n1; j > 0; j--) {
            let currentResult = i * j

            if (isPalindrome(currentResult) && currentResult > result) {
                result = currentResult;
            }
        }
    }

    return result;
}

function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
}

module.exports = largestPalindrome(3);
