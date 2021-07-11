/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo;
    var resultado;
    sueldo = parseInt(txtIdSueldo.value);
    resultado = sueldo * 0.10;
    resultado = resultado + sueldo;
    document.getElementById('txtIdResultado').value = resultado;

}
//txtIdSueldo
//txtIdResultado
/* var importeSueldo;
var aumento;
var resultado;
importeSueldo = txtIdSueldo.value;//1000.89
importeSueldo = parseFloat (importeSueldo);


forma 1 
resultado = importeSueldo * 1.1;


aumento = importeSueldo* (10/100);  mejor forma
resultado = importeSueldo + aumento;  mejor forma
txtIdResultado.value = resultado.toFixed (3); mejor forma
 importeSueldo = parseFloat(importeSueldo)









 */