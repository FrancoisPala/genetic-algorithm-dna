const selectTwoIndividuals = (population) => {
    return ([population[Math.floor(Math.random() * (population.length - 1))][0], population[Math.floor(Math.random() * (population.length - 1))][0]]);
};

const merge = (a, b, delimiter) => {
    const dna = a.slice(0, delimiter) + b.slice(delimiter, b.length);
    return dna;
};

const nudgeNudge = (couple) => {
    const delimiter = Math.floor(Math.random() * couple[0][0].length);
    const dna = merge(couple[0], couple[1], delimiter);
    return dna;
};

const cross = (population, popSize) => {
    // console.log('Crossing population...');
    const newPop = population.slice(0, population.length).map(el => el[0]);
    for (let i = 0; i < (popSize - population.length); i++) {
        const couple = selectTwoIndividuals(population);
        const baby = nudgeNudge(couple);
        newPop.push(baby);
    }
    return newPop;
};

module.exports = cross;