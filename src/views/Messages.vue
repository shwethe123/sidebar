<template>
  <div class="welcome container">
    <div v-if="show_login_form">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>You are not amenber? <span @click="show_login_form=!show_login_form">create account</span></p>
    </div>
    <div v-else>
      <Signup @enterChatroom="enterChatroom"></Signup>
      <p>Already menber? <span @click="show_login_form=!show_login_form">Login account</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Login from '@/components/ChatroomFile/Login.vue'
import Signup from '@/components/ChatroomFile/Signup.vue'
export default {
  components: {Login, Signup },
  setup() {
    let show_login_form = ref(true);
    let router = useRouter();
    let enterChatroom = () => {
      router.push({name:"Chatroom"})
    }

    return  {show_login_form,enterChatroom}
  }

}
</script>

<style>
    .welcome {
        /* text-align: center; */
        max-width: 450px;
        padding: 70px 0;
    }
    .welcome form {
      /* width: 300px; */
      /* margin: 20px auto; */
    }
    /* .welcome label {
      display: block;
      margin: 20px 0 10px;
    } */
    .welcome input {
      /* width: 90%; */
      padding: 10px;
      /* border-radius: 12px; */
      border: 1px solid #eee;
      outline:  none;
      color: #999;
      margin: 10px auto;
    }
    .welcome span {
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
    .welcome button {
      margin: 20px auto;
    }
</style>
<!-- <template>
  <div class="messages">
    <h1>Messages</h1>
    <Navbar></Navbar>
    <Chatroom></Chatroom>
    <NewChatroom></NewChatroom>
  </div>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import Chatroom from '@/components/ChatroomFile/Chatroom.vue'
import NewChatroom from '@/components/ChatroomFile/NewChatroom.vue'
import Navbar from '@/components/ChatroomFile/Navbar.vue'
export default {
  components: { SinglePost, Chatroom, NewChatroom, Navbar },

}
</script>

<style scoped>
.messages {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  max-width: 100%;
  font-size: 30px;
  color: rgb(167, 167, 167);
  font-weight: 500;
}
</style> -->