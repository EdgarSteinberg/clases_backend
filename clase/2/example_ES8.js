console.log("Funciones Object.entries, Object.keys, Object.values");

function print_obj_entries(obj) {
    console.warn("Ejemplo de Object.entries() >>>")

    let entries = Object.entries(obj);

    console.log(entries)

    for (let entrie of entries) {
        console.log(`${entrie[0]}, ${entrie[1]}`);
    }
}

print_obj_entries(
    {
        name: "Edgar",
        last_name: "Steinberg",
        age: 34
    }
);


function print_obj_keys_and_values(obj) {
    console.warn("Ejemplo de Object.keys() and Object.values()>>>")

    let keys = Object.keys(obj);
    let values = Object.values(obj);

    console.log(keys, values);

    for (let i = 0; i < keys.length; i ++) {
        console.log(`${keys[i]}, ${values[i]}`)
    }
}


    let persona = {
        name: "Edgar",
        last_name: "Steinberg",
        age: 34
    }
;

print_obj_keys_and_values(persona);
