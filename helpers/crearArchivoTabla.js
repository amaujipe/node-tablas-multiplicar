const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base, hasta, listar) => {
    
    let salida  = '';
    salida += '=============\n';
    salida += `Tabla del ${base}\n`;
    salida += '=============\n';
    
    let consola = '';
    consola += '=============\n'.green;
    consola += `${'Tabla del'.green} ${colors.red(base)}\n`;
    consola += '=============\n'.green;
    
    for(let i = 1; i <= hasta; i++) {
        salida  += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    
    if( listar ) {
        console.clear();
        console.log(consola);
    }

    try {

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    } catch( err ) {
    
        throw err;
    
    }
    
    return `tabla-${base}.txt`;

}

module.exports = {
    crearArchivo
}
