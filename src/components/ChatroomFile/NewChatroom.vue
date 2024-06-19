<template>
    <form>
      <div class="texta_area">
        <textarea 
          placeholder="Type your message and hit Enter to send" 
          v-model="message" 
          @keypress.enter.prevent="handleSubmit"
        ></textarea>
        <i class="bi bi-send-check-fill" @click="handleSubmit">
        </i>
        
      </div>
    </form>
  </template>
  
<script>
  // NewChatroom.vue

  import { ref } from 'vue';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { serverTimestamp } from '@/firebase/config';

export default {
  setup() {
    let message = ref('');
    let { user } = getUser();
    let { error, addDoc } = useCollection('messages'); // Ensure 'messages' matches your Firestore collection name

    const handleSubmit = async () => {
      if (!message.value.trim()) return; // Don't send empty messages

      let chat = {
        message: message.value,
        name: user.value.displayName,
        create_at: serverTimestamp(),
      };

      try {
        await addDoc(chat);
        message.value = ''; // Clear the message input after sending
      } catch (error) {
        console.error('Error sending message:', error.message);
        // Optionally handle error and notify the user
      }
      
      // if (!message.value.trim()) return; // Don't send empty messages
  
      // try {
      //   await db5.collection('chats').add({
      //     message: message.value,
      //     name: user.value.displayName,
      //     createdAt: serverTimestamp()
      //   });
      //   message.value = ''; // Clear the message input after sending
      // } catch (error) {
      //   console.error('Error sending message:', error.message);
      //   // Optionally handle error and notify the user
      // }
    };

    return { message, error, handleSubmit };
  },
};
</script>
  
  <style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  .texta_area {
    display: flex;
    flex-direction: row;
    color: blueviolet;
    user-select: none;
  }
  .texta_area p {
    margin-left: 10px; /* Adjust spacing between textarea and send button */
    cursor: pointer;
  }
  .bi {
  margin: 0;
  padding: 10px;
  cursor: pointer;
  color: #007bff;
  font-size: 25px;
}
  </style>
  