//Ejercicio 1
function invertirCadena(str){
  return str.split("").reverse().join("")
}
//Test Ejericio 1
console.log("Test 1:",invertirCadena("javascript")==="tpircsavaj"?"Pasó":"Falló")

//Ejercicio 2 
function encontrarMaximo(arr){ 
return Math.max(...arr)}; 
//Test Ejercicio 2
console.log(encontrarMaximo([7,2,9,4,1])===9?"Pasó":"Falló")
//Ejercicio 3
function esPalindromo(str){
 let str2=str.toLowerCase(); return str2.split("").reverse().join("")===str
} 
//Test Ejercicio 3
console.log("Test 3a:",esPalindromo("reconocer")===true?"Pasó":"Falló");
console.log("Test 3b:",esPalindromo("programación")===false?"Pasó":"Falló")
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

//Ejercicio 5 
function obtenerDatosSimulados(fallo = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallo) {
                reject("Error simulado")
            } else {
                resolve({ data: "Información importante" });
            }
        }, 1000);
    });
}
//Test Ejercicio 5
(async () => {
  try {
    const resultado = await obtenerDatosSimulados();
    console.log("Test 5a:", resultado.data === "Información importante" ? "✓ Pasó" : "✗ Falló");
  } catch (e) {
    console.log("Test 5a: ✗ Falló (debería resolver)");
  }

  try {
    const resultado = await obtenerDatosSimulados(true);
    console.log("Test 5b: ✗ Falló (debería rechazar)");
  } catch (e) {
    console.log("Test 5b:", e === "Error simulado" ? "✓ Pasó" : "✗ Falló");
  }
})();
