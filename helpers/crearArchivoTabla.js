const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base, hasta, listar) => {
    
    let salida = '';
    
    salida += '=============\n';
    salida += `Tabla del ${base}\n`;
    salida += '=============\n';
    
    for(let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    
    if( listar ) {
        console.clear();
        console.log(salida);
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
