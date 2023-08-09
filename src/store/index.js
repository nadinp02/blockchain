
import { createStore } from 'vuex';

export default createStore({
  state: {
    username: "",
  },
  getters: {},
  mutations: {
    login(state, username) {
       console.log("Mutación login se está llamando...");
      state.username = username;
      localStorage.setItem('username', username); // Set the 'username' value in localStorage
      alert('Logged in');
    },
    logout(state) {
      state.username = "";
      localStorage.removeItem('username'); // Remove the 'username' value from localStorage
      alert('Logged out');
    },
    initializeStore(state) {
      if (localStorage.getItem('username')) {
        state.username = localStorage.getItem('username'); // Initialize 'username' from localStorage
      }
    },
  },
  actions: {},
  modules: {},
});

