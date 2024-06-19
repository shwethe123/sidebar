<template>
  <div class="dashboard">
    <Sidebar></Sidebar>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: { Sidebar },
  name: 'HomeView',
}
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh; /* Full height of viewport */
  width: 100vw; /* Full width of viewport */
}

.sidebar {
  width: 250px; /* Fixed width for sidebar */
  flex-shrink: 0; /* Prevent sidebar from shrinking */
  background-color: #001d3d; /* Matching sidebar background */
}

.content {
  flex-grow: 1; /* Take remaining space after sidebar */
  background-color: #f9f5ff;
  border-radius: 20px;
  margin: 10px; /* Spacing around the content */
  padding: 20px; /* Padding inside the content */
  overflow-y: auto; /* Scrollable content area */
  margin-left: 250px; /* Adjust for fixed sidebar width */
  
}
</style>
