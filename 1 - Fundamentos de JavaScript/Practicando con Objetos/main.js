// Objetos

const web = {
   nombre: 'hernan',
   links: {
      enlace: 'www.hernan.com.ar'
   },
   redesSociales: {
      youtube: {
         enlace: 'youtube.com/hernan',
         nombre: 'Hernan yt'
      },
      facebook:{
         enlace: 'facebook.com/hernan',
         nombre: 'hernan fb'
      }
   }
}

const {enlace, nombre} = web.redesSociales.youtube;
console.log(enlace, nombre);
// console.log( web.redesSociales.youtube.enlace)