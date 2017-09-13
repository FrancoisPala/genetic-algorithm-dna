const getRandomString = (length, chars) => {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const generate = (length, popSize, possibleChars) => {
    // console.log('Generating...');
    let population = [];
    for (let i = 0; i < popSize; i++) {
        let randomString = getRandomString(length, possibleChars);
        population.push(randomString);
    }
    return population;
};

module.exports = generate;
