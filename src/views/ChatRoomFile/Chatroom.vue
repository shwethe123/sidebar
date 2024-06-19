<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatroom></NewChatroom>
  </div>
</template>

<script>
import Navbar from '@/components/ChatroomFile/Navbar.vue';
import getUser from '@/composables/getUser';
import NewChatroom from '@/components/ChatroomFile/NewChatroom.vue'
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import ChatWindow from '@/components/ChatroomFile/ChatWindow.vue';

export default {
  components: { Navbar, NewChatroom, ChatWindow,  },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    watch(user, (newUser) => {
      if (!newUser) {
        router.push({ name: "Messages" });
      }
    }, { immediate: true });

    return { user };
  }
};
</script>

<style scoped>
.container {
  width: 90%;
  max-width: 960px;
  margin: 40px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: #fff;
}
</style>
