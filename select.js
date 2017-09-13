const getSubset = (population, tournamentSize) => {
    const participants = [];
    for (let i = 0; i < tournamentSize; i++) {
        participants.push(population[Math.floor(Math.random() * population.length)]);
    }
    return participants;
};

const declareWinner = (participants) => {
    return participants.reduce((el, acc) => {
        return el[1] > acc[1] ? acc = el : acc;
    }, 0);
};

const tournament = (population, parentsNumber) => {
    const parents = [];
    for (let i = 0; i < parentsNumber; i++) {
        const participants = getSubset(population, 5);
        const winner = declareWinner(participants);
        parents.push(winner);
    }
    return parents;
};

const select = (population, parentsNumber) => {
    // console.log('Selecting individuals...');
    return tournament(population, parentsNumber);
};

module.exports = select;