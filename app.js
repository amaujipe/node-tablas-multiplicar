const { crearArchivo } = require('./helpers/crearArchivoTabla');
const argv = require('./config/yargs');

const { base, hasta, listar } = argv;

crearArchivo( base, hasta, listar )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );