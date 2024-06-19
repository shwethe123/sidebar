<template>
  <div class="sidebar">
    <div class="clock">
      <Clock></Clock>
    </div>
    <div class="title">
      <!-- Jobe Sidebar -->
    </div>
    <div class="menu_items">
      <router-link to="/overview" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-house"></i> Overview
        </div>
      </router-link>
      <router-link to="/messages" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-chat-dots"></i> Messages
        </div>
      </router-link>
      <router-link to="/calander" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-calendar-day"></i> Calander
        </div>
      </router-link>
      <router-link to="/formlayouts" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-layout-text-sidebar"></i> FormCreate
        </div>
      </router-link>
      <router-link to="/create" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-plus-circle"></i> CreateAdd
        </div>
      </router-link>
      
      <router-link to="/Products" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-cart-plus-fill"></i> Products
        </div>
      </router-link>
      <router-link to="/profile" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-person"></i> Profile
        </div>
      </router-link>
      <router-link to="/settings" active-class="active" class="side_btn">
        <div class="link_container">
          <i class="bi bi-gear"></i> Settings
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Clock from './Clock/Clock.vue';

export default {
  components: { Clock }
};
</script>

<style scoped>
.sidebar {
  background-color: #333;
  color: #fff;
  padding: 20px;
  width: 250px;
  min-height: 100vh;
  position: fixed;
}

.title {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.menu_items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.side_btn {
  text-decoration: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.4s, color 0.4s;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 8px;
}

.side_btn:hover .link_container,
.active .link_container {
  background-color: #034b8f;
  color: #00FFFF;
  font-weight: bold;
  padding: 10px 32px;
  border-radius: 8px;
  transition: 0.4s;
}

.link_container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.link_container i {
  font-size: 18px;
}

.clock {
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  /* background-color: #ffff; */
  background-color: #0a5ead;
  /* border: #ffff solid 1px; */
  border-radius: 5px;
}
</style>
