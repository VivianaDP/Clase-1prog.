// console.log('Estoy Lost');

// console.log(6+7);

// Modificar el Primer Script de 'alturaPersona' para:
// Preguntar el Nombre de la Persona.
// Verificar si la persona es mas alta de 178 cm. En caso afirmativo informar
// "es mayor que el promedio", de lo contrario: "es menor que el promedio".

let readlineSync = require('readline-sync');

// pregunta Nombre 
let nombrePersona = readlineSync.question("Indique el Nombre de la Persona:");

// pregunta Altura
let alturaPersona = readlineSync.question("Indique la altura de la persona: ");

console.log('La altura de la persona es:' ,alturaPersona);

if(Number(alturaPersona) > 178) {
    console.log('Es Mayor que el Promedio');
} else { console.log(nombrePersona, 'Es Menor que el Promedio')};


