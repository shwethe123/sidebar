<template>
    <div>
      <table>
        <thead>
          <tr>
            <Date></Date>
            <th>မြို့တွင်းဆိုင်</th>
            <th>ဝမ်လုံးဆိုင်</th>
            <th>ဟောင်လိတ်ဆိုင်</th>
            <th>စုစုပေါင်း</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in Posts" :key="post.id">
            <td>အလုပ်ကြမ်းအလုပ်သမား</td>
            <td>{{ post.loca1F }}</td>
            <td>{{ post.loca2F }}</td>
            <td>{{ post.loca3F }}</td>
            <td>NULL</td>
          </tr>
        </tbody>
        <tbody>
          <tr v-for="post in Posts" :key="post.id">
            <td>ကားနောက်လိုက်အလုပ်သမား</td>
            <td>{{ post.loca1E }}</td>
            <td>{{ post.loca2E }}</td>
            <td>{{ post.loca3E }}</td>
            <td>NULL</td>
          </tr>
        </tbody>
        <tbody>
          <tr class="total" v-for="post in Posts" :key="post.id">
            <td>စုစုပေါင်း</td>
            <td>{{ post.loca1 }}</td>
            <td>{{ post.loca2 }}</td>
            <td>{{ post.loca3 }}</td>
            <td>{{ post.total }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import getCalculat from "@/composables/getCalculat";
  import Date from '../Clock/Date.vue';
  
  export default {
  components: { Date },
    name: 'CalculatePost',
    setup() {
      let { Posts, error, load } = getCalculat();
  
      load();
  
      return { Posts, error };
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    font-size: 15px;
    color: rgb(10, 10, 10);
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    overflow-x: auto;
  }
  
  thead tr {
    background-color: #009879;
    color: #ffffff;
  }
  
  th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
  }
  
  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }
  
  tbody tr:nth-child(odd) {
    background-color: #ffffff;
  }
  
  tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  .total {
    color: red;
    font-weight: 800;
  }
  
  @media (max-width: 768px) {
    table {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    table {
      font-size: 12px;
    }
  }
  </style>
  