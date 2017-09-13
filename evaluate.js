const similarity = require('./utils');

let fitnessSum = 0;

const normalize = (population) => {
    return population.map(element => {
        return ([element[0], element[1] / fitnessSum])
    });
};

const compare = (generated, goal, ifExists, isWellPlaced) => {
    let score = 0;
    for(let i = 0; i < generated.length; i++) {
        if (goal.includes(generated[i])) {
            fitnessSum += ifExists;
            score += ifExists;
            if (goal[i] === generated[i]) {
                fitnessSum += isWellPlaced;
                score += isWellPlaced
            };
        }
    }
    return score;
};

const grade = (population, string) => population.map(dna => ([dna, compare(dna, string, 10, 20)]));

const sortFunction = (a, b) => {
    return b[1] - a[1];
};

const evaluate = (population, string, i) => {
    // console.log('Evaluating...');
    const gradedPop = grade(population, string);
    const normalizedPop = normalize(gradedPop);
    const sortedPop = normalizedPop.sort(sortFunction);
    const percentage = Math.floor(similarity(string, sortedPop[0][0]) * 100);
    console.log(`The best of generation ${i} with ${percentage}% is: ${sortedPop[0][0]}`);
    return sortedPop;
};

module.exports = evaluate;
