// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1); // el .toUpperCase me convierte lo seleccionado a mayuscula, en este caso al seleccionar [0] me agarra solo la primera letra de nombre
  // el .slice devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. en este caso
  // me devolvera ombre sin la n, ya que empezara desde la posicion 1 que corresponde a la o.
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb(); // en este caso lo que esta haciendo esta funcion es invocar a otra funcion, es por ello que cb es tomada como funcion y se le coloca ().
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1 + n2); // en este caso el callback estoy llamando al argumento cb que es una funcion que dentro se encontraran los argumentos n1 y n2.
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 // Primera opcion
  // var numeros = [1,2,3,4,5]
  // var suma = 0;
  // for(var i = 0; i < numeros.length; i++) {
  //   suma = suma + numeros[i];
  // }
  // cb(suma);
 var suma = numeros.reduce(function(acc, elemento) { return acc + elemento;},0); cb(suma); // El método reduce()ejecuta una función reductora sobre cada elemento de un array,
 // devolviendo como resultado un único valor. el primer argumento de la funcion es el elemento acumulado, y el que sigue es el que esta posicionandoce en cuestion.
 // el 0 final es la posicion en la que quiero que comience mi acumulador.


}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
array.forEach(function(elemento){cb(elemento);})
}
/* for(var i = 0; i < array.length; i++) {                 ... otra forma de hacerlo
    cb(array[i]);
  }
}
*/

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoarray = array.map(function (elemento, indice) {return cb(elemento)})
  return nuevoarray;
}
/*
 var array = [1,2,3,4,5]
 function cb (e) {console.log(e)}
 nuevoarray = []
 var nuevoArray = []; for(var i = 0; i < array.length; i++) {
  nuevoArray.push(cb(array[i]));
   nuevoArray[i] = cb(array[i]);
 }
*/

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoarray = [];
  var empiezacona = array.map(function(elemento){if (elemento[0] === 'a') return nuevoarray.push(elemento);})
  return nuevoarray;
}
// var nuevoArray = [];                                        ...otra manera de hacerlo
//for(let i = 0; i<array.length; i++) {
//  if(array[i][0] === "a") {
//    nuevoArray.push(array[i])
//  }
//}
//return nuevoArray;
//}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
