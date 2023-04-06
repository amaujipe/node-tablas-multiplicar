// Se crea la configuracion de los argumentos que se recibiran por consola
const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Limite hasta el que se multiplicara la base'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicar en consola'
        }
    })
    .check( (argv) => {

        if( isNaN(argv.b) )
            throw 'La opcion [-b, --base] debe ser un numero.';

        if( isNaN(argv.h) )
            throw 'La opcion [-h, --hasta] debe ser un numero.'
        
        return true;

    }) 
    .argv;

module.exports = argv;
