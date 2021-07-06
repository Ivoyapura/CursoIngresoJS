/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
	var numero2;
	numero1 = parseInt(txtIdNumeroDividendo.value);
	numero2 = parseInt(txtIdNumeroDivisor.value);
	resto = numero1 % numero2;
	alert(resto);
}



//txtIdNumeroDividendo
//txtIdNumeroDivisor