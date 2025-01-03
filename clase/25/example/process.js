import { Command } from 'commander';

const program = new Command();

program
  .arguments('<args...>') // Permite argumentos adicionales.
  .option('-d', 'Descripcion de este comando', false)
  .option('-p <port>', 'Puerto del servidor', 8080)
  .requiredOption('-u <user>', 'Usuario que ejecuta el programa', 'Usuario no declarado!');

program.parse();

// Muestra las opciones y los argumentos restantes.
console.log('Options:', program.opts());
console.log('Remaining Arguments: ', program.args);
console.log('Arguments from process: ', process.argv);


// Example : node .\process.js nada  -d -p 3000 cualquier cosa -u Edgar