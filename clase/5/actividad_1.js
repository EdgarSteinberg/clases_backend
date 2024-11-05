

const randomNumber = (maxNumbers) => {

    const randomNumbers = [];

    for(let i = 0; i < maxNumbers; i++){
        const numeroRandom = Math.floor(Math.random() * 20)+ 1;

        randomNumbers.push(numeroRandom);
    }

    return randomNumbers;
}

const generateCounterNumbersObj = (arrayNumbers) => {
    const countedNumbersObj = {};

    arrayNumbers.forEach(number => {
        countedNumbersObj[number] = countedNumbersObj[number] ? countedNumbersObj[number] + 1 : 1
    });

    return countedNumbersObj;
}

const result = generateCounterNumbersObj(randomNumber(10000));

console.log(result);
