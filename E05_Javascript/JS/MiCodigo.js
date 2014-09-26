window.onload = hacerClick;

function hacerClick()
{
	//Regresa un array con los elementos 'p' de la página
	//Especifica que quiere acceder al elemento [0]
	//Se le pasa la referencia a la función "mosrtarAlerta" al evento "onclick"
	document.getElementsByTagName('p')[0].onclick=mosrtarAlerta;
}

function mosrtarAlerta()
{
	alert('hizo click!');
}
