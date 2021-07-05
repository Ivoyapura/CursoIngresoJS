/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado= txtIdNombre.value;  primera solucion-sacar las 2 barras-. la de abajo es la otra forma.
//no olvidar el .value. si aparece  un mensaje que dice objet element html, falta el value.
nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("Su nombre es :"+ nombreIngresado);
}
	


//txtIdNombre


/* 

aprendimos a

Ingresar datos por ID

inresar daos mediante prompt
declarar una variable
mostrar datos/ informacion mediante alert



*/

