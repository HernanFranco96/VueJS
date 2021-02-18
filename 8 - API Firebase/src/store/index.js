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
    },
    eliminar(state, payload){
      // Filter devuelve todos las tareas que sean distintas al payload
      state.tareas = state.tareas.filter(item => item.id !== payload);
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
    }
  },
  actions: {
    async cargarBaseDeDatos({commit}){
      try {
        const res = await fetch('https://primer-api-ab0f3-default-rtdb.firebaseio.com/tareas.json');
        const data = await res.json();
        const arrayTareas = [];
        for(let id in data){
          arrayTareas.push(data[id])
        }
        console.log(arrayTareas);
        commit('cargar', arrayTareas);

      } catch (error) {
        console.log(error);
      }
    },
    async setTareas({commit}, tarea) {
      try {
        const res = await fetch(`https://primer-api-ab0f3-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea) 
        });

        const dataDB = await res.json();
        console.log(dataDB);

      } catch (error) {
        console.log(error);
      }
      commit('set', tarea);
    },
    async deleteTareas({commit}, id) {
      try {
        await fetch(`https://primer-api-ab0f3-default-rtdb.firebaseio.com/tareas/${id}.json`, {
          method: 'DELETE', 
        });
        commit('eliminar', id);
      } catch (error) {
        console.log(error);
      }
    },
    setTarea({commit}, id){
      commit('tarea', id);
    },
    async updateTarea({commit}, tarea){
      try {
        const res = await fetch(`https://primer-api-ab0f3-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea) 
        });
        const data = await res.json();
        console.log(data);
        commit('update', tarea);

      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
