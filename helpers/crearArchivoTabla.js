// Se trar el modulo para manipular el filesystem del S.O.
const fs = require('fs');

// Importacion del paquete colors de npm
require('colors');

// Funcion que crea el archivo de texto con la tabla de multiplicar solicitada
const crearArchivo = async ({ base, hasta }) => {
    
    let salida  = '';
    salida += '=============\n';
    salida += `Tabla del ${base}\n`;
    salida += '=============\n';
    
    for(let i = 1; i <= hasta; i++) {
        salida  += `${base} x ${i} = ${base * i}\n`;
    }

    try {
        // Metodo que crea el archivo en la ruta especificad y le agrega el contenido
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    } catch( err ) {
        throw err;
    }
    
    return `tabla-${base}.txt`;

}

module.exports = {
    crearArchivo
}
