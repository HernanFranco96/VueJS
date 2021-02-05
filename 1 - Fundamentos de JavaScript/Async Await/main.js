// Async Await
fetch = require("node-fetch");

const obtenerPokemones = async() => {
   try{
      // await: Esperemos la respuesta de fetch
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
      // Esperamos la respuesta convertida en json
      const data = await respuesta.json();
      console.log(data.results)
   }catch(err){
      console.log(err)
   }
}

obtenerPokemones();