const fetch = require("node-fetch");
   
const obtenerPokemones = async() => {
   try{
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await respuesta.json();
      console.log(data.results);

      // Map recorre el array, y devuelve la propiedad name
      const arrayNombres = data.results.map(pokemon => pokemon.name);
      console.log(arrayNombres);
   } catch(err){
      console.log(err);
   }
}

obtenerPokemones();