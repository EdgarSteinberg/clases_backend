let originalValues = [1, 2, 3, 4, 5];

let newValues = originalValues.map(x => x + 1);

let otherValues = originalValues.map(x => x * 2);

let moreValues = originalValues.map(x => "a");

console.log(
    "originalValues", originalValues,
    "\nnewValues", newValues,
    "\notherValues", otherValues,
    "\nmoreValues", moreValues)

const callbackFuntion = (value) => {
    if (value % 2 === 0) {
        return value;
    } else {
        return "No es par";
    }
}

const evaluatePair = originalValues.map(callbackFuntion);
console.log(evaluatePair);