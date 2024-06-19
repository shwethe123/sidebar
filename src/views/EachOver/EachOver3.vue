<template>

  

    <div class="table-responsive">
      <h1>ဟောင်လိတ်ဆိုင် ဆိုင် (၃)</h1>
      <div class="form_box">
        <div >
            <h2 class="g-output">G-ထွက်</h2>
            <div v-for="post in postsDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p :class="{ false_p: !post.condition }">
                  {{ post.name }}
                </p>
              </router-link>
            </div>
          </div>
  
          <div>
            <h2 class="out-juty">စလစ်/မြို့ပြင်</h2>
            <div v-for="post in sales_inDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p :class="{ false_p: !post.condition }">
                  {{ post.name }}
                </p>
              </router-link>
            </div>
          </div>
  
          <div>
            <h2 class="retail">မြို့တွင်းရောင်း</h2>
            <div v-for="post in sales_outDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p :class="{ false_p: !post.condition }">
                  {{ post.name }}
                </p>
              </router-link>
            </div>
          </div>
  
          <div>
            <h2 class="car-order">ကားအော်ဒါ</h2>
            <div v-for="post in car_orderDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p :class="{ false_p: !post.condition }">
                  {{ post.name }}
                </p>
              </router-link>
            </div>
          </div>
  
          <div>
            <h2 class="accounting">ငွေကိုင်</h2>
            <div v-for="post in accountingDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p :class="{ false_p: !post.condition }">
                  {{ post.name }}
                </p>
              </router-link>
            </div>
          </div>
  
          <!-- <div>
            <h2>စာရင်းကိုင်</h2>
            <div v-for="post in accountingDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p>{{ post.name }}</p>
              </router-link>
            </div>
          </div>
          <div>
            <h2>စက်ကိုင်</h2>
            <div v-for="post in auditDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p>{{ post.name }}</p>
              </router-link>
            </div>
          </div>
          <div>
            <h2>အပြင်သွား</h2>
            <div v-for="post in out_JutyDb3" :key="post">
              <router-link class="router" :to="{name:'Detail',params: {id:post.id}}">
                <p>{{ post.name }}</p>
              </router-link>
            </div>
          </div> -->
      </div>
      <!-- <div>
        <FormsOne :s_post="posts"></FormsOne>
      </div>
      <div>
        <FormsTow :s_sales_in="sales_in"></FormsTow>
      </div> -->
  
    </div>
    
  </template>
  
  <script>
  import getPosts from '@/composables/getPosts'
  import SinglePost from '@/components/SinglePost.vue';
  import FormsOne from '@/components/FormFile/FormsOne.vue';
  import FormsTow from '@/components/FormFile/FormsTow.vue';
  export default {
    components: { SinglePost, FormsOne, FormsTow },
    setup() {
      let {sales_inDb3,postsDb3,sales_outDb3,order_inDb3,error,accountingDb3,auditDb3, car_orderDb3, out_JutyDb3 ,load} = getPosts();
      // console.log(out_JutyDb3)/
      load();
      return {sales_inDb3,postsDb3,sales_outDb3,order_inDb3,error,accountingDb3,auditDb3 ,car_orderDb3 ,out_JutyDb3}
    }
  }
  </script>
  
  <style scoped>
  .table-responsive {
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    font-size: 12px; /* Reduced font size */
    color: rgb(10, 10, 10);
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form_box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); /* Adjusted for responsive design */
    gap: 10px;
    padding: 10px;
    background-color: #fff;
  }
  
  .router {
    text-decoration: none;
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
  
  h1 {
    background-color: #001d3d; /* Yellow color for h1 */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 16px;
    margin: 0;
    font-weight: 800;
    font-size: 20px; /* Adjusted font size */
    color: #fff;
    box-shadow: 0 2px 4px rgba(1, 0, 0, 0.3);
  }
  
  h2 {
    background-color: #003566; /* Black color for h2 */
    padding: 15px;
    margin: 2px;
    border-radius: 10px;
    font-size: 14px; /* Adjusted font size */
    color: #fff;
    box-shadow: 0 2px 4px rgba(1, 0, 0, 0.3);
  }
  
  p {
    background-color: #b5cbe2;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    color: black;
    font-size: 13px; /* Reduced font size */
    border-left: 4px solid rgb(0, 231, 0);
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
    background-color: #003566; /* Darker blue on hover */
    color: white;
  }
  </style>
  
