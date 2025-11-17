//Ejercicio 3
function esPalindromo(str){
 let str2=str.toLowerCase(); return str2.split("").reverse().join("")===str
} 
//Test Ejercicio 3
console.log("Test 3a:",esPalindromo("reconocer")===true?"Pasó":"Falló");
console.log("Test 3b:",esPalindromo("programación")===false?"Pasó":"Falló")