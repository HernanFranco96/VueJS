// Objetos

const mascota = {
   nombre: 'Tomi',
   edad: 17,
   vivo: true,
   colores: ['negro', 'blanco']
}

mascota.id = 1;

console.log(
   `
      Perro Nro: ${mascota.id}
      Nombre: ${mascota.nombre}
      Edad: ${mascota.edad}
      Vivo: ${mascota.vivo}
      Colores: ${mascota.colores}
   `);

// Destructurando el objeto
const {edad, nombre} = mascota
console.log(edad, nombre)
