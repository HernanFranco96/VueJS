<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['cargarLocalStarage'])
  },
  created(){
    this.cargarLocalStarage();
  }
}
</script>
