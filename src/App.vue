<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link to="/">Home</router-link>
        </li>
      </ul>
       <router-link v-if="!$store.state.username" to="/login"></router-link>
       <div>
       <router-link v-if="$store.state.username" @click="logout" :to="{ name: 'login' }"> {{ $store.state.username }}</router-link>
          <router-link v-if="$store.state.username" @click="logout" :to="{ name: 'login' }">Logout</router-link>
          </div>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout');
      // Redirigir al usuario a la vista de inicio de sesión (LoginView) después de hacer logout
      this.$router.push({ name: 'login' });
    }
  },
  mounted() {
    this.$store.commit('initializeStore');
  }
}
</script>
<style>
nav a{
  padding: 10px;
  color: white;
  text-decoration: none
}
nav a:hover{
  color: white;
}
nav{
  height:55px;
  background-color: #8692f7;
}
#navbarNav{
  justify-content: space-between
}
</style>
