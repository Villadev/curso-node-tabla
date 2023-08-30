const {crearArchivo} = require("./helpers/multiplicar");
const argv = require('./config/yargs');

const base  = argv.base || 1;
crearArchivo(argv.b, argv.l, argv.h);



