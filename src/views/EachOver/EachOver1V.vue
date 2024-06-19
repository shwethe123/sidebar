<template>
    <div class="table-responsive">
      <h1>ဆန်ဆိုင်း ဆိုင် (၁)</h1>
      <div class="form_box">
        <div>
          <h2 class="g-output">G-ထွက်</h2>
          <div v-for="post in postsDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'g_posts')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="wholesale">လက်ကား</h2>
          <div v-for="post in sales_inDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'sales_in')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="retail">လက်လီ</h2>
          <div v-for="post in sales_outDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'sales_out')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="car-order">ကားအော်ဒါ</h2>
          <div v-for="post in car_orderDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'car_order')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="order-in">အဝင်ပိုင်း</h2>
          <div v-for="post in order_inDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'order_in')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="order-in2">ပစ္စည်းမှာ</h2>
          <div v-for="post in order_in2Db1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'order_in2')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="accounting">စာရင်းကိုင်</h2>
          <div v-for="post in accountingDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'accounting')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="audit">စက်ကိုင်</h2>
          <div v-for="post in auditDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'audit')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
  
        <div>
          <h2 class="out-juty">အပြင်သွား</h2>
          <div v-for="post in out_JutyDb1" :key="post.id">
            <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'out_Juty')">
              {{ post.name }}
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import getPosts from '@/composables/getPosts';
  import { db1 } from '@/firebase/config'; // Import your Firebase configuration
  
  export default {
    setup() {
      // Destructure data from getPosts()
      let {
        sales_inDb1,
        postsDb1,
        sales_outDb1,
        order_inDb1,
        order_in2Db1,
        error,
        accountingDb1,
        auditDb1,
        car_orderDb1,
        out_JutyDb1,
        load
      } = getPosts();
  
      load(); // Load initial data
  
      // Define toggleCondition function to handle updates for different collections
      const toggleCondition = async (post, collectionName) => {
        try {
          const newCondition = !post.condition;
          
          // Update condition in the specified collection based on collectionName
          await db1.collection(collectionName).doc(post.id).update({ condition: newCondition });
  
          // Update local state for immediate feedback
          post.condition = newCondition;
        } catch (err) {
          console.error("Error updating post condition:", err);
        }
      };
  
      return {
        sales_inDb1,
        postsDb1,
        sales_outDb1,
        order_inDb1,
        order_in2Db1,
        error,
        accountingDb1,
        auditDb1,
        car_orderDb1,
        out_JutyDb1,
        toggleCondition, // Expose toggleCondition function to template
      };
    },
  };
  </script>
  
  
  
  <style scoped>
  .table-responsive {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 12px;
    color: rgb(10, 10, 10);
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
  }
  
  .form_box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;
    padding: 10px;
    width: 100%;
  }
  
  .router {
    text-decoration: none;
  }
  
  h1 {
    background-color: #001d3d;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 16px;
    margin: 0;
    font-weight: 800;
    font-size: 20px;
    color: #fff;
    box-shadow: 0 2px 4px rgba(1, 0, 0, 0.3);
  }
  
  h2 {
    background-color: #003566;
    padding: 15px;
    margin: 2px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 800;
    color: #fff;
    box-shadow: 0 2px 4px rgba(1, 0, 0, 0.3);
  }
  
  h2.g-output { background-color: #0d6efd; }
  h2.wholesale { background-color: #198754; }
  h2.retail { background-color: #ffc107; }
  h2.car-order { background-color: #fd7e14; }
  h2.order-in { background-color: #dc3545; }
  h2.order-in2 { background-color: #6610f2; }
  h2.accounting { background-color: #20c997; }
  h2.audit { background-color: #17a2b8; }
  h2.out-juty { background-color: #6f42c1; }
  
  p {
    background-color: #b5cbe2;
    border-left: 4px solid rgb(0, 231, 0);
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    color: black;
    font-size: 13px;
    transition: background-color 0.3s;
    cursor: pointer;
  }
  
  .false_p {
    background-color: #f89b9b;
    border-left-color: rgb(241, 1, 49);
  }
  .bi {
    color: #6610f2;
    cursor: pointer;
  }
  p:hover {
    background-color: #003566;
    color: white;
  }
  </style>
  
  