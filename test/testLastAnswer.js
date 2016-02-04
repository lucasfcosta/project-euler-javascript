'use strict';

let fs = require('fs');
let assert = require('chai').assert;
let answers = require('./answers');

// This needs to be synchronous for Mocha to behaviour correctly
let files = fs.readdirSync(`${__dirname}/../solutions`);

describe(`Problem ${files.length}`, () => {
    let startTime = new Date();
    let answer = require(`../solutions/${`00${files.length}`.slice(-3)}`);
    let endTime = new Date();

    let elapsedTime = endTime - startTime;

    it(`Your answer: ${answer} (${elapsedTime}ms)`, () => {
        let correctAnswer = answers[`problem${files.length}`];

        assert.strictEqual(answer, correctAnswer);
    });
});
