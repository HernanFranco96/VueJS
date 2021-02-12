<template>
  <div>
     <Titulo texto="Ruta con parametros" />
     <!-- Mostramos el parametro que recibe por url -->
     <h2>Parámetro: {{ $route.params.id }}</h2> 
  </div>
</template>

<script>
import Titulo from '../components/Titulo'

export default {
   components: {
      Titulo
   }
}
</script>

<style>

</style>