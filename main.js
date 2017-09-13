const generate = require('./generate');
const evaluate = require('./evaluate');
const select = require('./select');
const cross = require('./cross');
const mutate = require('./mutate');

const MAINDNA = 'Coucou Romain comment ca va oui ben t es moche voila haha bon sinon il se passe quoi ici oulala ca devient long la bonnnnnbnbnbrdbe';
const possibleChars = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let keepGoing = 1;

const isOver = (population, startString, i) => {
    return population.filter(el => {
        if (el === startString) {
            console.log(`
            Found it after ${i + 1} generations! The DNA was: 
            ==> "${el}" <==
            Congratulations!`)
            keepGoing = 0;
        };
        return el;
    });
};

const loop = (string, population, popSize, i) => {
    const evaluatedPop = evaluate(population, string, i);
    const selectedPop = select(evaluatedPop, popSize / 2);
    const crossedPop = cross(selectedPop, popSize);
    const mutatedPop = mutate(crossedPop, 20, possibleChars);
    return mutatedPop;
};

const main = (string, popSize) => {
    let population = generate(string.length, popSize, possibleChars);
    for (let i = 0; i <= 1000 && keepGoing === 1; i++) {
        population = loop(string, population, popSize, i);
        isOver(population, string, i);
    }
    if (keepGoing === 1) {
        console.log(`
            The DNA couldn't be found!
            Try again with a bigger population or more generations.
            Good luck!`);
    }
};
main(MAINDNA, 1000);