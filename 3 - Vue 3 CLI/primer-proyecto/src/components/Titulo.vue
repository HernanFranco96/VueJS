<template>
   <div>
      <h1>Titulo del sitio web</h1>
      <p>{{texto}}</p>
   </div>
</template>

<script>
export default {
   name: 'Titulo',
   props: {
      texto: String
   }
}
</script>


<style scoped>
   /* scoped indica que los estilos funcionan solo en este componente */
   h1{
      color: peru;
   }
</style>