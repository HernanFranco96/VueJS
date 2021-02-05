// Funciones
function sumar(num){
   console.log(num)
}
sumar(10)

// ---------------------------------------------------------------

// Funcion de flecha
// Cuando recibe un parametro se pueden omitir los parentesis
const sumarDos = (num, num2) => (num + num2);

const resultado = sumarDos(15, 15);
console.log(resultado);

// ---------------------------------------------------------------

const mensaje = nombre => 'Hola soy ' + nombre;

const resultadoMensaje = mensaje('Hernán');
console.log(resultadoMensaje);

// ---------------------------------------------------------------

// Cuando igualamos un parametro quiere decir que si el usuario no ingresa un numero sera igual a lo asignado
const sumarTres = (num = 0) => {
   console.log(num + 3);
}

sumarTres()