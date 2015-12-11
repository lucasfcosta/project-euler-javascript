'use strict';

// Largest palindrome product

function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
}

function largestPalindrome(digits) {
    let n1 = parseInt('9'.repeat(digits), 10);

    let result = 0;

    for (let i = n1; i > 0; i--) {
        for (let j = n1; j > 0; j--) {
            let currentResult = i * j;

            if (isPalindrome(currentResult) && currentResult > result) {
                result = currentResult;
            }
        }
    }

    return result;
}

module.exports = largestPalindrome(3);
