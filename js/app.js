/*
La página debe clacular la segunda potencia del número ingresado al
hacer click en el botón

1. Tengo que recuperar la referencia del boton 
2. Asignar el evento click
3. Crear una funcion que se ejecute con el evento 
4. Dentro de la funcion hacer los calculos y mostrar 
*/


/*1*/$("#btn1")./*2*/click(/*3*/function(ev){
	ev.preventDefault();/*evita que el fomualrio se envie al servidor*/

/* 4.1-recuperaar el valor ingresado por el usuario 
y guardar en una variable
   4.2-realizar el calculo y guardar en una variable2
   4.3-mostrar resiltado

*/
	/*4.1*/let ingresado= $("#n1").val();

	/*4.2*/let result= ingresado*ingresado;
	/*let result= Math.pow(ingresado, 2);*/ /*este es para clacular de una forma mas directo*/ 

		console.log(result);

		//carga el resultado en la "p"

	/*4.3*/$(".res1").html(`${ingresado}<sup>2</sup> = ${result}`);

	$(".res1").css("border","solid 5px purple")
	});