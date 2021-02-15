<template>
  <div>
    <!-- trim limpia los espacios de mas que deja el usuario -->
    <input
      type="text"
      class="form-control my-2"
      placeholder="Ingrese nombre"
      v-model.trim="tarea.nombre"
    />

    <h6 class="mt-3">Conocimientos:</h6>
    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="tarea.categorias"
        value="javascript"
      />
      <label for="check-1" class="form-check-label">JavaScript</label>
    </div>

    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="tarea.categorias"
        value="node js"
      />
      <label for="check-2" class="form-check-label">Node.Js</label>
    </div>

    <h6 class="mt-2">Disponibilidad:</h6>
    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-1"
          class="form-check-input"
          v-model="tarea.estado"
          value="urgente"
        />
        <label for="radio-1" class="form-check-label">Full-Time</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-2"
          class="form-check-input"
          v-model="tarea.estado"
          value="relax"
        />
        <label for="radio-2" class="form-check-label">Part-Time</label>
      </div>
    </div>

    <h6 class="mt-2">Sueldo estimado:</h6>
    <div class="mt-2">
      <!-- v-model.number indica a vue que el valor es numerico -->
      <input type="number" class="form-control" v-model.number="tarea.numero" />
    </div>

    <button
      type="submit"
      class="btn btn-dark mt-2 btn-block w-100"
      :disabled="bloquear"
    >
      Procesar
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>
