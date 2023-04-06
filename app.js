const { crearArchivo } = require('./helpers/crearArchivoTabla');
const argv = require('./config/yargs');
const colors = require('colors');

const { base, hasta, listar } = argv;

crearArchivo( base, hasta, listar )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );