
// Crea una función que determine si un número es par o impar. Un número es impar si la suma de todas sus cifras es impar y un número es par si la suma de todas sus cifras es par. Si un número es impar, devuelve "Impar". De lo contrario, devuelva "Par".
// Por ejemplo, esParOImpar(121) debería devolver "Par", ya que 1 + 2 + 1 = 4. esParOImpar(41) debería devolver "Impar", ya que 4 + 1 = 5.

//La siguiente solucion es menos compacta sin embargo es mas explicativa.

let num = 2847564372;
const ParOImpar = (num) => {
  let cadena = num.toString();                                                         //Puesto que no me es posible pasar el numero directamente a un arreglo
                                                                                       //de numeros, lo pasas a un arreglo por medio del metodo 'toString()'
                                                                                       // y lo asignas a la variable 'cadena'.
  let arregloDeSubcadenas = Array.from(cadena);                                        //Conviertes la cadena en un arreglo de

                                                                                       //subcadenas donde cada subcadena contiene un digito por medio del metodo Array.from.
  let arregloDeNumeros = arregloDeSubcadenas.map((el) => Number(el));                  //Por medio del metodo map convierto cadqa elemento del arreglo en numero, por lo cual tendriamos un arreglo de numeros.
                                                                                       //y lo almaceno en la variable arregloDeNumeros
  let resultadoDeSumatoria = arregloDeNumeros.reduce((pv, cv) => {
                                                                                       //por medio del metodo reduce sumo todos los numeros del arreglo y los almaceno en la variable resultadoDeSumatoria
    return pv + cv;
  });

  let resultadoFinal = Number(resultadoDeSumatoria);

  if (resultadoFinal % 2 >= 1) {
    return "Impar";
  } else {
    return "Par";
  }
};

console.log(ParOImpar(num));                                                           //Prueba




// La siguiente seria una solucion algo mas compacta pero de igual forma te explico paso por paso.

let numero = 345789;
const esParOImpar = (number) => {
  const arregloDeDigitos = Array.from(String(numero), Number);                         //Convierto el numero en un arreglo de numeros
  const sumaDeDigitos = arregloDeDigitos.reduce(                                       //Sumo los numeros del arreglo utilizando 'reduce';
    (previousValue, currentValue) => {
      return previousValue + currentValue;
    }
  );

let resultadoDeAdicion = sumaDeDigitos;                                               //Asigno 'sumaDeDigitos' a una variable llamada 'resultadoDeAdicion'
  if (resultadoDeAdicion % 2 === 0) {                                                 //Si el resultado de la sumatoria de digitos
    return "Par";                                                                     //que ha sido asignada a la variable resultadoDeAdicion dividida entre 2 arroja un residuo == 0,
  } else {                                                                            //entonces es perfectamente divisible entre dos por tanto estariamos hablando de un numero par.
    return "Impar";                                                                   //Caso contrario, seria un numero impar.
  }
};

console.log(esParOImpar(numero));



//Una solucion mas compacta seria:


let numerito = 488;
const parOImpar = (n) => (eval([...(n + "")].join`+`) % 2 ? "Inpar" : "Par");

console.log(parOImpar(numerito));  🔥🔥🔥🔥🔥🔥 💪💪💪💪                                //Prueba



