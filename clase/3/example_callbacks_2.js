
const myMapFunction = (array, callback) => {
    let new_array = [];

    for (let i = 0; i < array.length; i++) {
        const new_value = callback(array[i]);
        new_array.push(new_value);
    }

    return new_array;
};

let originalValues = [1, 2, 3, 4, 5];

let newValues = myMapFunction(originalValues, x => x + 1);

let otherValues = myMapFunction(originalValues, x => x * 2);

let moreValues = myMapFunction(originalValues, x => "a");


console.log(
    "originalValues", originalValues,
    "\nnewValues", newValues,
    "\notherValues", otherValues,
    "\nmoreValues", moreValues
);