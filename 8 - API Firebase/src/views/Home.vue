<template>
  <div class="home">
    <!-- prevent evita que se cargue la pagina -->
    <form @submit.prevent="procesarFormulario">
      <Input :tarea="tarea" />
    </form>
    <hr>
    <ListaTareas />
  </div>
</template>

<script>
import Input from '../components/Input';
import ListaTareas from '../components/ListaTareas';
import {mapActions} from 'vuex';
const shortid = require('shortid'); // Generador de IDs

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
  },
  data(){
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      },
      estadoBoton: false
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea);
      if(this.tarea.nombre.trim() === '' || 
      this.tarea.categorias.length == 0 || 
      this.tarea.estado.trim() === '' || 
      this.tarea.numero == 0){
        console.log('Falta completar un campo');
        return
      }else{
        console.log('Formulario Cargado');

        // Generar id
        this.tarea.id = shortid.generate();
        console.log('ID Generado: ' + this.tarea.id);

        // Enviar los datos
        this.setTareas(this.tarea);

        // Limpiamos campos
        this.tarea = {
          id: '',
          nombre: '',
          categorias: [],
          estado: '',
          numero: 0
        }
      }
    }
  },

}
</script>
