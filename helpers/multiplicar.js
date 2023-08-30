const fs = require('fs');
const colors = require('colors/safe');


const crearArchivoTabla = (base = 5, listar = false, hasta = 10) => {
    let salida = '';

    for (let x = 1; x <= hasta; x++) {
        salida +=`${base} x ${x} = ${base * x}\n`;
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if(listar) {
        console.log('====================');
        console.log(colors.cyan(`Tabla del ${base}`));
        console.log('====================');
        console.log(salida);
    }
    console.log(`tabla-${base}.txt creada`);
};

module.exports = {
    crearArchivo: crearArchivoTabla
}
