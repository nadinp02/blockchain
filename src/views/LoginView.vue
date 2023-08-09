<template>
  <form @submit.prevent="submit">
    <label for="">Usuario</label>
    <input type="text" v-model="form.username" required>
    <br><br>
    <label for="">Contraseña</label>
    <input type="password" v-model="form.password" required>
    <br><br>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
methods: {
    async submit() {
      if (!this.form.username || !this.form.password) {
        alert("Por favor, ingrese un nombre de usuario y contraseña válidos.");
        return;
      }

      if (this.form.username.includes(" ") || this.form.password.includes(" ")) {
        alert("El nombre de usuario y la contraseña no pueden contener espacios en blanco.");
        return;
      }

      try {
        // Realiza la solicitud POST al punto final de inicio de sesión en tu servidor local
        const response = await axios.post('http://localhost:8081/login', this.form);

        if (response.data.success) {
          localStorage.setItem('authToken', response.data.token);

          this.$router.push({ name: 'Index' });
          alert("Inicio de sesión fallido. Verifique sus credenciales e inténtelo nuevamente.");
        }
      } catch (error) {
        alert("Error al iniciar sesión. Por favor, inténtelo nuevamente más tarde.");
        console.error(error);
      }
    }
  }
};
</script>


<style scoped>
 form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f7f7f7;
  margin-top: 130px
}

form label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

form input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

form button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #8692f7;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

form button:hover {
  background-color: #727feb;
}
</style>

