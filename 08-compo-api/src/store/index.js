import { createStore } from 'vuex'

export default createStore({
  state: {
    todo: [
      {id: '1', text: 'Recolectar las piedras del infinito', completed: false },
      {id: '2', text: 'Piedra del Alma', completed: true },
      {id: '3', text: 'Piedra de poder', completed: true },
      {id: '4', text: 'Piedra de realidad', completed: false },
      {id: '5', text: 'Piedra de secuaces competentes', completed: false },
    ]
  },
  getters: {
    pendingTodos(state, getters, rootState){
      return state.todo.filter(t => !t.completed)
    },
    allTodos: (state) => {
      return state.todo
    },
    completedTodos: (state) => {
      return state.todo.filter(t => t.completed)
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
