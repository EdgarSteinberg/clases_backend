
class Person {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }

    static species = "Humano";

    getFullName(){
        return `Nombre: ${this.name}, Apellido: ${this.last_name}`;
    }

    getSpecies(){
        return `Aunq no lo creas soy un ${Person.species}`;
    }
}

// Aquí debes pasar los parámetros al crear la instancia
const Person_1 = new Person("Edgar", "Steinberg", 34);
const Person_2 = new Person("Ilu", "Peña", 58);

console.log(Person_1.getFullName());
console.log(Person_2.getFullName());

console.log(Person_1.getSpecies());
console.log(Person_2.getSpecies());


console.log("Person Species", Person.species);
console.log("Person Name: " ,Person_1.name);
console.log("Person Name: " ,Person_2.name);
console.log("Person Age: " ,Person_1.age);
console.log("Person Age: " ,Person_2.age);