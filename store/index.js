import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: []
    },
    mutations: {
      setTodos(state) {
        state.todos = [].concat(state.todos);
      },
      getTodo(state, id) {
        return [].concat(state.todos.find(todo => todo.id === id));
      },
      saveTodo(state, todo) {
        state.todos.push(Object.assign({}, todo));
      }
    },
    actions: {
      getTodos({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let todos = [
              { id: 1, done: false, label: 'Do the dishes' },
              { id: 2, done: false, label: 'Clean my house' },
              { id: 3, done: false, label: 'Love my wife' }
            ];
            resolve({ todos });
            commit('setTodos', todos);
          }, 3000);
        });
      }
    }
  });
};
