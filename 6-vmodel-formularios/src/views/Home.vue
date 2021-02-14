<template>
  <div class="home">
    <!-- prevent evita que se cargue la pagina -->
    <form @submit.prevent="procesarFormulario">
      <!-- trim limpia los espacios de mas que deja el usuario -->
      <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">

      <div class="form-check form-check-inline">
        <input type="checkbox" id="check-1" class="form-check-input" v-model="tarea.categorias" value="javascript">
        <label for="check-1" class="form-check-label">JavaScript</label>
      </div>

       <div class="form-check form-check-inline">
        <input type="checkbox" id="check-2" class="form-check-input" v-model="tarea.categorias" value="node js">
        <label for="check-2" class="form-check-label">Node.Js</label>
      </div>

      <div class="mt-2">
        <div class="form-check form-check-inline">
          <input type="radio" id="radio-1" class="form-check-input" v-model="tarea.estado" value="urgente">
          <label for="radio-1" class="form-check-label">Urgente</label>
        </div>

        <div class="form-check form-check-inline">
          <input type="radio" id="radio-2" class="form-check-input" v-model="tarea.estado" value="relax">
          <label for="radio-2" class="form-check-label">Relax</label>
        </div>
      </div>

      <div class=mt-2>
        <!-- v-model.number indica a vue que el valor es numerico -->
        <input type="number" class="form-control" v-model.number="tarea.numero">
      </div>

    <button type="submit" class="btn btn-dark mt-2 btn-block w-100" :disabled="bloquear">Procesar</button>

    </form>

    <hr>

    <p>{{tarea}}</p>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
      tarea: {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      },
      estadoBoton: false
    }
  },
  methods: {
    procesarFormulario(){
      console.log(this.tarea);
      if(this.tarea.nombre.trim() === ''){
        console.log('Campo vacio');
        return
      }else{
        console.log('Campo completo');
        // Enviar los datos
        this.tarea = {
          nombre: '',
          categorias: [],
          estado: '',
          numero: 0
        }
      }
    }
  },
  computed: {
    bloquear(){
      return this.tarea.nombre.trim() === "" ? true : false
    }
  }
}
</script>
