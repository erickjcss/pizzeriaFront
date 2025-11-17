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
