// Suma
const a = 20;
const b = 30;
const suma = a + b
alert ("El resultado de la suma es: "+ suma);
// Resta
const c = 25;
const d = 15;
const resta = c - d;
alert ("El resultado de la resta es: "+ resta);
// Mayusculas y Minusculas
const mensaje = "La Voz de tu Cabeza Siempre Tiene el Mismo Volumen";
// Sin cambios
console.log(mensaje); 
// Todo en Mayusculas
console.log(mensaje.toUpperCase()); 
// Todo en Minusculas
console.log(mensaje.toLowerCase()); 
// Quitando espacios vacios
const texto = "       La Voz de tu Cabeza Siempre Tiene el Mismo Volumen      ";
// Texto Original
console.log(texto);
// Texto Sin Espacios al Principio y Final
console.log(texto.trim());
// Separar palabras
const frutas = "Fresa Zarzamora Mango Frambuesa Durazno";
const arreglo = frutas.split(" ");
// Texto sin srreglo
console.log(frutas);
// Texco con arreglo
console.log(arreglo);
// Separar Correo 
const email = "alansanchezr2526@gmail.com";
// Cadena Completa 
console.log(email);
// Cadena Separada
console.log(email.split("@"));