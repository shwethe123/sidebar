<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Display Name</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Display Name" v-model="displayName">
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" v-model="email">
      <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      <p>{{ error }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1" v-model="password">
    </div>
    <!-- <button>submit</button> -->
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

export default {
  setup(props,context) {
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const { error, createAccount } = useSignup();

    const signUp = async () => {
      let res = await createAccount(email.value, password.value, displayName.value);
      if (res) {
        context.emit("enterChatroom");
        // console.log(res.user);
      }
    };

    return { displayName, email, password, error, signUp };
  }
};
</script>

<style scoped>
h2 {
  font-weight: 800;
}
p {
  color: red;
}
</style>
