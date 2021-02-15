import { createStore } from 'vuex';
import router from '../router/index'; 

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    cargar(state, payload){
      state.tareas = payload;
    },
    set(state, payload){
      state.tareas.push(payload);
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
    },
    eliminar(state, payload){
      // Filter devuelve todos las tareas que sean distintas al payload
      state.tareas = state.tareas.filter(item => item.id !== payload);
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
    },
    tarea(state, payload){
      // Si la id no existe se redirige a la pagina de inicio
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/');
        return
      }
      // Find devuelve la tarea que sea igual al payload
      state.tarea = state.tareas.find(item => item.id === payload);
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item);
      router.push('/');
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
    }
  },
  actions: {
    cargarLocalStarage({commit}){
      // Si existe una bd llamado tareas enviamos los datos a la mutacion
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'));
        commit('cargar', tareas);
        return
      }

      // Sino existe, creamos un array vacio
      localStorage.setItem('tareas', JSON.stringify([]));
    },
    setTareas({commit}, tarea) {
      commit('set', tarea);
    },
    deleteTareas({commit}, id) {
      commit('eliminar', id);
    },
    setTarea({commit}, id){
      commit('tarea', id);
    },
    updateTarea({commit}, tarea){
      commit('update', tarea);
    }
  },
  modules: {
  }
})
