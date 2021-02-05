// Fetch
const fetch = require("node-fetch");

// Consume una API
fetch('https://pokeapi.co/api/v2/pokemon/1')
   // Obtenemos la respuesta de la url
   // Transformamos los datos a JSON
   .then( res =>  res.json())
   // Volvemos a leer la respuesta para monstrarla mas abajo
   .then(data => {
      data.results.forEach(element => {
         console.log(element.name)
      });
   })
   .catch(err => console.log(err))