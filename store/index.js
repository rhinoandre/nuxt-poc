import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: []
    },
    mutations: {
      setTodos(state, todos) {
        state.todos = [].concat(todos);
      },
      getTodo(state, id) {
        return Object.assign({}, state.todos.find(todo => todo.id === id));
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
            commit('setTodos', todos);
            resolve({ todos: todos });
          }, 3000);
        });
      }
    }
  });
};

export default createStore;
