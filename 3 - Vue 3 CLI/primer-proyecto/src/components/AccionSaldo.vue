<template>
  <div>
   <!-- El evento click va activar un metodo llamado accion y este emite un evento que se llama accionPadre -->
   <button @click="accion" :disabled="desactivar">{{ texto }}</button>     
  </div>
</template>

<script>
export default {
   props:{
      texto: String,
      desactivar: {
         type: Boolean,
         default: false
      }
   },
   methods: {
      accion(){
         this.$emit('accionPadre')
      }
   }
}
</script>

<style>

</style>