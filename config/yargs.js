const colors = require('colors/safe')

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        defaultValue: 1,
        demandOption: false,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero hasta donde llegara la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw colors.red('La base tiene que ser un número');
        }
        if (isNaN(argv.h)) {
            throw colors.red('Hasta tiene que ser un número');
        }
        return true;
    })
    .argv;

module.exports = argv;
