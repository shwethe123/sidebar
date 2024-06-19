<template>
  <div class="setting">
    <h1>setting</h1>
    <div v-for="post in sales_out" :key="post">
      <router-link :to="{name:'Detail',params: {id:post.id}}">
        <h3>{{ post.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
import getPosts from '@/composables/getPosts'
export default {
  setup() {
    let {sales_in,posts,sales_out,error,load} = getPosts();
    load();
    return {sales_in,posts,sales_out,error}
  }
}
</script>

<style scoped>
.setting {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 30px;
  color: rgb(167, 167, 167);
  font-weight: 500;
}
</style>