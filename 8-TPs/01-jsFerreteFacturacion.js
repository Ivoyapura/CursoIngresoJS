/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1 = parseInt(txtIdPrecioUno.value);
	precio2 = parseInt(txtIdPrecioDos.value);
	precio3 = parseInt(txtIdPrecioTres.value);
	resultado = precio1 + precio2 + precio3 ;
	alert("la suma de los tres productos es "+ resultado);		 	
	
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1 = parseInt(txtIdPrecioUno.value);
	precio2 = parseInt(txtIdPrecioDos.value);
	precio3 = parseInt(txtIdPrecioTres.value);
	resultado = (precio1 + precio2 + precio3)/3 ;
	
	alert("El promedio de los tres productos es "+ resultado);
	
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1 = parseInt(txtIdPrecioUno.value);
	precio2 = parseInt(txtIdPrecioDos.value);
	precio3 = parseInt(txtIdPrecioTres.value);
	resultado = (precio1 + precio2 + precio3)*1.21 ;
	
	alert("El precio final de los tres productos es "+ resultado);
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

//parsefloat entero