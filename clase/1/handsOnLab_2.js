
class Contador {

    constructor(nombre, total) {
        this.nombre = nombre;
        this.total = 0;
    }

    static totalGlobal = 0;

    obtenerResponsable() {
        return this.nombre;
    }

    obtenerCuentaIndividual() {
        return this.total;
    }

    obtenerCuentaGlobal() {
        return Contador.totalGlobal;
    }

    contar() {
        this.total += 1;
        Contador.totalGlobal += 1;
    }
}


const persona_1 = new Contador("Edgar");
const persona_2 = new Contador("Sasha");

persona_1.contar();
persona_1.contar();
persona_1.contar();

persona_2.contar();
persona_2.contar();

console.log(`Nombre Responsable: ${persona_1.obtenerResponsable()}: Cuenta Individual: ${persona_1.obtenerCuentaIndividual()}`);
console.log(`Nombre Responsable: ${persona_2.obtenerResponsable()}: Cuenta Individual:${persona_2.obtenerCuentaIndividual()}`);


console.log(`Cuenta Global: ${persona_1.obtenerCuentaGlobal()}`);
console.log(`Cuenta Global: ${persona_2.obtenerCuentaGlobal()}`);