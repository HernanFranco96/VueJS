<template>
  <div>
    <h2>Tipo de cuenta: {{ cuenta }}</h2>
    <h2>Saldo: {{ saldo }}</h2>
    <h2>Cuenta {{ estado ? "Activa" : "Desactivada" }}</h2>
    <div v-for="(item, index) in servicios" :key="index">
      {{ index + 1 }} - {{ item }}
    </div>

   <!-- Un componente padre puede mandar props a componentes hijos -->
    <AccionSaldo 
      texto="SUMAR"
      @accionPadre="aumentar"
    />
    <AccionSaldo 
      texto="RESTAR"
      @accionPadre="disminuir"
      :desactivar="estadoSaldo"
    />
  </div>
</template>

<script>
// Componente hijo
import AccionSaldo from "./AccionSaldo.vue";

export default {
  components: {
    AccionSaldo,
  },
  data() {
    return {
      saldo: 1000,
      cuenta: "Visa",
      estado: true,
      servicios: ["giro", "abono", "transferencia"],
      estadoSaldo: false
      };
  },
  methods:{
     aumentar(){
        this.saldo = this.saldo + 100
        this.estadoSaldo = false;
     },
     disminuir(){
        if(this.saldo == 0){
           alert('Saldo agotado')
           this.estadoSaldo = true;
        }else{
            this.saldo = this.saldo - 100
        }
     }
  }
};
</script>

<style></style>
