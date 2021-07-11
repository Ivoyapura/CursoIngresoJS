/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar 
 si se ingresara el largo y el ancho de un terreno 
 rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se 
ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas
 de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var resultado;

	largoDelTerreno = parseInt(txtIdLargo.value);
	anchoDelTerreno = parseInt(txtIdAncho.value);
	resultado = (largoDelTerreno*2)+(anchoDelTerreno*2);
	resultado = resultado * 3;
	alert("deberas comprar "+ resultado + " mts de alambre");

}
function Circulo () 
{
	var radioDelTerreno;
	var resultado;

	radioDelTerreno = parseInt(txtIdRadio.value);
	resultado = (radioDelTerreno * 2)*3.14;
	
	resultado= resultado.toFixed(2)
	alert("Deberas comprar " + resultado + "mts de alambre");

	
}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var resultado;
	var bolsaDeCemento;
	var bolsaDeCal;

	largoDelTerreno = parseInt(txtIdLargo.value);
	anchoDelTerreno = parseInt(txtIdAncho.value);
	resultado = (largoDelTerreno *anchoDelTerreno);
	bolsaDeCemento = resultado * 2;
	bolsaDeCal = resultado * 3;
	alert("se necesita "+ bolsaDeCemento + " bolsa de cemento "  +bolsaDeCal + "bolsas de cal");




}


//txtIdLargo
//txtIdAncho
//txtIdRadio