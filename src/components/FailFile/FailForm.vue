<template>
    <div>
      <!-- <h4>ဖိုင်းကျစာရင်း</h4> -->
      <table class="table">
        <thead class="table-danger">
          <tr>
            <th scope="col">Loca</th>
            <th scope="col">Name</th>
            <th scope="col">ဖိုင်းရက်</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.loca }}</td>
            <td>{{ post.name }}</td>
            <td class="date">{{ post.fail_time }}</td>
            <td>
              <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { db4 } from '@/firebase/config';
  import failPost from "@/composables/failPost";
  
  export default {
    setup() {
      const { posts, error, load } = failPost();
  
      const deletePost = async (id) => {
        try {
          await db4.collection("fail_posts").doc(id).delete();
          // Directly remove the post from the local posts array
          posts.value = posts.value.filter(post => post.id !== id);
        } catch (err) {
          console.error("Error deleting post:", err);
        }
      };
  
      load();
  
      return { posts, error, deletePost };
    },
  };
  </script>
  
  <style scoped>
  .table {
    max-width: 100%;
    height: auto;
    text-align: center;
  }
  .router {
    background-color: transparent;
    text-decoration: none;
  }
  .date {
    color: red;
    font-weight: 800;
    border-radius: 5px;
}
  </style>
  