'use strict';

let fs = require('fs');
let assert = require('chai').assert;
let answers = require('./answers');

// This needs to be synchronous for Mocha to behaviour correctly
let files = fs.readdirSync(__dirname + '/../solutions');

for (let i = 1; i <= files.length; i++) {
    describe('Problem ' + i, () => {
        let answer = require('../solutions/' + ('00' + i).slice(-3));
        
        it('Your answer: ' + answer, () => {
            let correctAnswer = answers['problem' + i];

            assert.strictEqual(answer, correctAnswer);
        });
    });
}
