# [Project Euler](https://projecteuler.net/) (JavaScript) [![Build Status](https://travis-ci.org/lucasfcosta/project-euler-javascript.svg?branch=master)](https://travis-ci.org/lucasfcosta/project-euler-javascript)

**This platform has got everything you need to start solving [Project Euler](https://projecteuler.net/)'s challenges right away.**

You can use this to compare your solutions to mine's and **you can also use this project as a boilerplate**.

If you want to read problems offline you can take a look at problems.txt, which is a courtesy of another awesome project called [EulerPy](https://github.com/iKevinY/EulerPy).


## Getting Started

Please read the instructions below so you can get to know how everything works.


### Installing

1. Clone this repository
    
    ```
    $ git clone https://github.com/lucasfcosta/project-euler-javascript
    ```
2. Run `npm install` to install project's dependencies
3. If you want to use this as a boilerplate or a test platform you can delete every single file inside the `solutions` folder
4. To run gulp tasks you will also need to install [Gulp](https://www.npmjs.com/package/gulp) globally using `npm install -g gulp`

### Writing Solutions

To write a solution for a problem you will need to:

1. Create a file with the problem's number (for example: 1.js if you're solving the first one or 3.js if you are solving the third one)
2. Write your code the way you want it
3. Assign the final result to `module.exports`

I think it's very simple but **if you still need an example please take a look at the 001.js file, which is inside the solutions folder.**


### Testing Solutions

If you don't want to lint your code and check for code-style related issues you can run `gulp mocha`, otherwise just run `gulp test`.

To check the last solution only you should run `gulp testLast`.

### Other Configurations

You can also **configure the linting rules** using the files [`.jsrsc`](http://jscs.info/rules?q=) and [`.eslintrc`](http://eslint.org/docs/rules/).

Currently I'm also using a timeout of 60000ms for tests (because that's what Euler Project recommends) but you can change that on the `gulpfile.js` file. Just change 60000 to whatever you want.


### TL;DR

Clone this, install gulp globally (`npm install -g gulp`) and run `gulp mocha` to check the solutions (name them with them problem's number) inside the solutions folder.
