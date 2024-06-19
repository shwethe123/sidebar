<template>
    <div class="table-responsive">
      <h1>ဝမ်လုံးဆိုင် ဆိုင် (၂)</h1>
      <div class="form_box">
        <div >
            <h2 class="g-output">G-ထွက်</h2>
            <div v-for="post in postsDb2" :key="post">
                <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'g_posts')">
                  {{ post.name }} <i class="bi bi-check-circle-fill"></i>
                </p>
            </div>
          </div>
  
          <div>
            <h2 class="wholesale">လက်ကား</h2>
            <div v-for="post in sales_inDb2" :key="post">
                <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'sales_in')">
                    {{ post.name }} <i class="bi bi-check-circle-fill"></i>
                </p>
            </div>
          </div>
  
          <div>
            <h2 class="retail">လက်လီ</h2>
            <div v-for="post in sales_outDb2" :key="post">
                <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'sales_out')">
                    {{ post.name }} <i class="bi bi-check-circle-fill"></i>
                </p>
            </div>
          </div>
  
          <div>
            <h2 class="car-order">ကားအော်ဒါ</h2>
            <div v-for="post in car_orderDb2" :key="post">
                <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'car_order')">
                    {{ post.name }} <i class="bi bi-check-circle-fill"></i>
                </p>
            </div>
          </div>
  
          <div>
            <h2 class="order-in">အဝင်ပိုင်း</h2>
            <div v-for="post in order_inDb2" :key="post">
                <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'order_in')">
                    {{ post.name }} <i class="bi bi-check-circle-fill"></i>
                </p>
            </div>
          </div>
  
          <div>
            <h2 class="order-in2">ငွေကိုင်</h2>
            <div v-for="post in accountingDb2" :key="post">
                <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'accounting')">
                    {{ post.name }} <i class="bi bi-check-circle-fill"></i>
                </p>
            </div>
          </div>
          <div>
            <h2 class="accounting">ကားတင်</h2>
            <div v-for="post in auditDb2" :key="post">
                <p :class="{ false_p: !post.condition }" @click="toggleCondition(post, 'audit')">
                    {{ post.name }} <i class="bi bi-check-circle-fill"></i>
                </p>
            </div>
          </div>
      </div>
  
    </div>
    
  </template>
  
  <script>
  import getPosts from '@/composables/getPosts'
  import SinglePost from '@/components/SinglePost.vue';
  import FormsOne from '@/components/FormFile/FormsOne.vue';
  import FormsTow from '@/components/FormFile/FormsTow.vue';
  import { db2 } from '@/firebase/config'
  export default {
    components: { SinglePost, FormsOne, FormsTow },
    setup() {
      let {sales_inDb2,postsDb2,sales_outDb2,order_inDb2,error,accountingDb2,auditDb2, car_orderDb2, out_JutyDb2 ,load} = getPosts();
      // console.log(out_JutyDb2)
      load();
            // Define toggleCondition function to handle updates for different collections
            const toggleCondition = async (post, collectionName) => {
        try {
          const newCondition = !post.condition;
          
          // Update condition in the specified collection based on collectionName
          await db2.collection(collectionName).doc(post.id).update({ condition: newCondition });
  
          // Update local state for immediate feedback
          post.condition = newCondition;
        } catch (err) {
          console.error("Error updating post condition:", err);
        }
      };

      return {sales_inDb2,postsDb2,sales_outDb2,order_inDb2,error,accountingDb2,auditDb2 ,car_orderDb2 ,out_JutyDb2, toggleCondition}
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
    background-color: #003566; /* Black color for h3 */
    padding: 15px;
    margin: 2px;
    border-radius: 10px;
    font-size: 14px; /* Adjusted font size */
    color: #fff;
    box-shadow: 0 2px 4px rgba(1, 0, 0, 0.3);
  }
  
  h2.g-output { background-color: #0d6efd; } /* Light blue for G-ထွက် */
  h2.wholesale { background-color: #198754; } /* Green for လက်ကား */
  h2.retail { background-color: #ffc107; } /* Yellow for လက်လီ */
  h2.car-order { background-color: #fd7e14; } /* Orange for ကားအော်ဒါ */
  h2.order-in { background-color: #dc3545; } /* Red for အဝင်ပိုင်း */
  h2.order-in2 { background-color: #6610f2; } /* Purple for ပစ္စည်းမှာ */
  h2.accounting { background-color: #20c997; } /* Teal for စာရင်းကိုင် */
  h2.audit { background-color: #17a2b8; } /* Cyan for စက်ကိုင် */
  h2.out-juty { background-color: #6f42c1; } /* Indigo for အပြင်သွား */
  
  p {
    background-color: #b5cbe2;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    color: black;
    font-size: 13px; /* Reduced font size */
    border-left: 4px solid rgb(0, 231, 0);
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
    background-color: #003566; /* Darker blue on hover */
    color: white;
  }
  </style>
  
  