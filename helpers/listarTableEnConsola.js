// Importando el paquete colors de npm
const colors = require('colors');

// Funcion que muestra la tabla de multiplicar en consola
const listarTablaEnConsola = ({ listar, base, hasta }) => {
    
    if( listar ) {
        
        console.clear();
    
        let consola = '';
        consola += '=============\n'.green;
        consola += `${'Tabla del'.green} ${colors.red(base)}\n`;
        consola += '=============\n'.green;
    
        for(let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
    
        console.log(consola);
    
    }
    
}

module.exports = {
    listarTablaEnConsola
}