import { createStore } from 'vuex'

export default createStore({
  // Es un valor global. Se mapea desde propiedades computadas
  state: {
    contador: 100
  },
  // Son lo unico que pueden cambiar los state. Se mapea desde methods
  mutations: {
    incrementar(state, payload){
      state.contador = state.contador + payload;
    },
    // La mutacion recibe un parametro
    disminuir(state, payload){
      state.contador = state.contador - payload;
    }
  },
  // Nos permite ejecutar una mutacion, ya que no es recomendable ejecutarle directamente
  // El commit ejecuta una mutacion
  actions: {
    accionIncrementar({ commit } , numero){
      commit('incrementar', numero);
    },
    accionDisminuir({ commit }, numero){
      // Mandamos un parametro a la mutacion
      commit('disminuir', numero);
    },
    accionBoton({ commit }, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero);
      }else{
        commit('disminuir', objeto.numero);
      }
    }
  },
  modules: {
  }
})
