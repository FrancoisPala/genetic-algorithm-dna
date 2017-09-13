const meddle = (element, possibleChars) => {
    const position = Math.floor(Math.random() * (element.length));
    const newGene = possibleChars[Math.floor(Math.random() * possibleChars.length)];

    return element.substr(0, position) + newGene + element.substr(position + newGene.length);
};

const mutate = (population, chance, possibleChars) => {
    return population.map(element => {
        if (Math.floor(Math.random() * 100) < chance) return meddle(element, possibleChars);
        return element;
    });
};

module.exports = mutate;