// Filter Crea un array con todos los elementos que cumplan la condicion implementada por la funcion dada

const fetch = require("node-fetch");

const obtenerPokemones = async () => {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await respuesta.json();
        //   console.log(data.results);

        // Filter devuelve los elementos que cumplen la condicion
        const arrayNombres = data.results.filter(pokemon => pokemon.name !== 'bulbasaur');
        console.log(arrayNombres);
    } catch (err) {
        console.log(err);
    }
}

obtenerPokemones();