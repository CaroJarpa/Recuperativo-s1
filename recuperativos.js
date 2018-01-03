/*EJERCICIO N°1 - NIVEL DIFICIL - 50 PUNTOS

/*Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
Ejemplo:
arr = [1, 2, 3, 4, 5, 6, 7]
n = 3
retorna [5, 6, 7, 1, 2, 3, 4]*/

var rotar = function (){
//arreglo que contiene los elementos para rotar
	var numeros = [1,2,3,4,5,6];
//variable que contiene la cantidad de veces que se va a rotar el arreglo
	var n = prompt("ingrese la cantidad de veces a rotar");
//que retorne el arreglo desde la resta entre el largo del arreglo y la cantidad de veces que quiero que rote.
//con concat junto los valores del arreglo despues de realizar la rotacion.
	return numeros.slice(numeros.length - n). concat(numeros.slice(0, numeros.length - n));

};

alert(rotar())


// pendiente de explicacion

/*Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.

Ejemplo:	arr = [1, 2, 3]
			retorna 0

			arr = [3, 2, 1]
			retorna 2*/

//creo la funcion 
function masChico(numeros){
/*declaro la variable donde utilizo math.min que es para encontrar el numero mas pequeño
y el appy que sirve para recorrer los valores del arreglo*/
	var minimo = Math.min.apply(null,numeros);
	return numeros.indexOf(minimo)
}

//llamar a la funcion en la consola
masChico([1,2,3]);

/*funcion utilizada desde https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/apply, 
exactamente este ejemplo

- min/max number in an array 
var numbers = [5, 6, 2, 3, 7];

- using Math.min/Math.max apply 
var max = Math.max.apply(null, numbers); This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) 
var min = Math.min.apply(null, numbers); */

/*EJERCICIO N°8 - NIVEL MEDIO - 30 PUNTOS

/* Dado un arreglo y un número, retornar el índice (posición) del número. 
Ejemplo: arr = [1, 5, 8, 19]
		  number = 8
		  retorna 2*/

//creo la funcion que retornara el indice de un arreglo llamado numeros
function retornarIndice(numeros){
	// creo el arreglo con los elementos
	var numeros =[1,2,3,4,5,6];
	// creo la variable con el numero que se buscara
	var buscar = 2;
	// creo la variable que recorrera el arreglo y con indexOf me devuelve el valor que coincida
	var posicion = numeros.indexOf(buscar);
	//retorna la posicion que se encuentra
	return posicion;
}
// se imprime en la consola
console.log(retornarIndice(numeros));

//EJERCICIO N°10 - NIVEL MEDIO - 30 PUNTOS


/*Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo. 
Escribir una función donde dado el nombre de la persona 
puedas retornar el asiento que le toca. 
La numeración comienza en 1, si la persona no tiene asiento retornar 0.
Ejemplo:lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
nombre = “Nadia”
retorna 3*/

//Se crea una funcion llamada asistentes
function asistentes(nombre){
//Se crea una variable con un arreglo donde van incluidos los nombres de las personas que van a asistir al evento
	var nombres = ["caracola", "marcela", "gigi", "pau"];
//creo un ciclo for donde se recorre el nombre ingresado por el usuario
	for(var i=0; i<nombre.length; i++){
//si el nombre ingresado es igual igual al nombre ingresado
		if(nombres[i] === nombre){
//el resultado partira desde el indice +1, ya que las posiciones comienzan desde cero y con el +1 partira desde el 1.
			return i+1;
		}
	}//si no cumple la condicion se retornara 0
	return 0;
}

/*EJERCICIO 11 - NIVEL FACIL - 20 PUNTOS

/* Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). 
Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no. 
Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4.*/

function promedioNotas(){
	//estas son las notas del alumno
	var notas = [1,2,3,4,5,6,7,6,5,4];
	//se declara una variable como suma y se inicializa en 0
	var suma = 0;
	//con un ciclo for se recorre el arreglo 
	for(var i=0; i < notas.length; i++){
		suma += notas[i];
	}
	//declaro una nueva variable para calcular el promedio
	var promedio = (suma/10);
	//si el promedio es mayor a 4
	if(promedio >= 4){
		// a traves de un alert se avisa al estudiante el promedio final y que aprobo el ramo
		alert(promedio + ", tu ramo fue aprobado");
		//pero si el promedio no es igual o mayor a 4, se avisa con un alert al estudiante su promedio y que no aprobo el ramo
	}else{
		alert(promedio + ", tu ramo fue reprobado");
	}
//se lama a la funcion.
}promedioNotas()

/*EJERCICIO 12 - NIVEL FACIL - 20 PUNTOS

/*Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
Palíndroma: palabra que se lee igual de adelante hacia atrás como de atrás hacia adelante. Ejemplo: Amalama
*/

function palindromo(){
	//se solicita al usuario que ingrese una palabra a verificar
	var palabraInicial = prompt("Escriba la palabra para verificar");

	//se pasa las letras a minusculas para que no exista problemas al reconocerlas
	palabraInicial = palabraInicial.toLowerCase();

	//con split se retornara un arreglo con las letras de la palabra Inicial
	//con reverse se invierte el orden de las letras
	//con join se unen las letras en una palabra
	var armarPalabra = palabraInicial.split("").reverse().join("");
	//si la palabra despues de invertirla y volver a armarla es igual a la palabra inicial
	if (armarPalabra === palabraInicial){
		// retornar true
		return true;
		//si es distinto retornar false
	}else{
		return false;
	}
}palindromo()

/* EJERCICIO 14 - NIVEL FACIL - 20 PUNTOS

Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   output nuevoArr = [2, 4, 6, 8, 10]*/

/*se crea la variable con el arreglo que aloja los numeros*/
var numeros= [1,2,3,4,5,6,7,8,9,10];
/*se crea una variable donde se indica que los numeros sean: 
-se debe realizar un filtro
-de los numeros cuyo residuo al dividir por 2 sea === a 0*/
var pares = numeros.filter(function(numeros){
	return numeros % 2 === 0;
})
/*se imprime en la consola la funcion solo con los numeros pares*/
console.log(pares);

/*EJERCICIO 15 - NIVEL FACIL - 20 PUNTOS

/*Dado un arreglo de 4 números positivos, 
devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		  output nuevoArr = [12, 24, 36, 48]*/

/*se crean dos variables: 
la primera donde se pone el arreglo que se multiplicara*/
var numbers = [1,2,3,4];
/*la segunda donde se asigna el valor por el que se multiplicara*/
var multiplicarPor = 12;
/*se crea la funcion donde se ordenara realizar la multiplicacion
del elemento por el numero indicado en la variable*/
function multiplicar(elemento){
	return elemento * multiplicarPor;
}
/*el metodo map llama a la funcion una vez por cada
elemento, y devuelve una nueva matriz con los resultados
http://www.w3im.com/es/jsref/jsref_map.html*/
console.log(arr.map(multiplicar));