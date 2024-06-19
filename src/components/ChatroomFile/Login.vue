<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
      </div>
      <div v-if="error" class="text-danger">{{ error }}</div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </template>
  
  <script>
  import useLogin from '@/composables/useLogin'
  import { ref } from 'vue';
  
  export default {
    setup(props,context) {
      const email = ref("");
      const password = ref("");
  
      const { error, signIn } = useLogin();
      const login = async () => {
        let res = await signIn(email.value, password.value);
        if (res) {
            context.emit("enterChatroom")
          // console.log(res.user);
        }
      }
  
      return { email, password, error, login }
    }
  }
  </script>
  
  <style scoped>
  h2 {
    font-weight: 800;
    text-align: center;
    color: #001d3d;
    padding: 20px;
  }
  .text-danger {
    color: red;
  }
  </style>
  