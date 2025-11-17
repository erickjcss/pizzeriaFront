//Ejercicio 4
function filtrarObjeto(objetoViejo, propiedades) {
    const objeto = {};
    
    for (const propiedad of propiedades) {
        if (propiedad in objetoViejo) {
            objeto[propiedad] = objetoViejo[propiedad];
        }
    }
    return objeto;
}
//Test Ejercicio 4
const objOriginal = {id: 1, nombre: Carlos,edad:30,email:"carlos@ejemplo.com"};
const objFiltrado = filtrarObjeto(objOriginal,["nombre", "edad"]);
console.log("Test 4:", Object.keys(objFiltrado).length===2&&objFiltrado.nombre==="Carlos"&&objFiltrado.edad===30?"Pasó":"Falló");
