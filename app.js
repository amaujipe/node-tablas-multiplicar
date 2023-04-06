// Importacion de metodos y variables
const { crearArchivo }         = require('./helpers/crearArchivoTabla');
const { listarTablaEnConsola } = require('./helpers/listarTableEnConsola');
const argv  = require('./config/yargs');

// Importacion del paquete colors de npm
require('colors');

// Muestra tabla de multiplicar en consola si se solicito
listarTablaEnConsola( argv );

// Crea el archivo de texto con la tabla de multiplicar solictada
crearArchivo( argv )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );