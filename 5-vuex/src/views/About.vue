<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h1>Mi contador: {{ $store.state.contador }}</h1> -->
    <!-- Utilizamos v-model para hacer una vinculacion directa desde el input hasta el dato texto -->
    <input type="text" v-model="texto">
    <h2>{{ texto }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: 'Escribe tu texto'
    }
  },
}
</script>
