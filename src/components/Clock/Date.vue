<template>
    <div>
      <!-- <h1>Current Date and Time</h1> -->
      <p>{{ currentDateTime }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'DateTimeDisplay',
    setup() {
      const currentDateTime = ref('');
  
      const updateDateTime = () => {
        const now = new Date();
        currentDateTime.value = now.toLocaleString();
      };
  
      onMounted(() => {
        updateDateTime();
        setInterval(updateDateTime, 1000); // Update every second
      });
  
      return {
        currentDateTime,
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.5em;
    font-weight: bold;
  }
  </style>
  