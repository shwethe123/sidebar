<template>
    <div class="messages container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-gthuk-tab" data-bs-toggle="tab" data-bs-target="#nav-gthuk" type="button" role="tab" aria-controls="nav-gthuk" aria-selected="true">G-ထွက် 2</button>
          <button class="nav-link" id="nav-lk-tab" data-bs-toggle="tab" data-bs-target="#nav-lk" type="button" role="tab" aria-controls="nav-lk" aria-selected="false">လက်ကား</button>
          <button class="nav-link" id="nav-ll-tab" data-bs-toggle="tab" data-bs-target="#nav-ll" type="button" role="tab" aria-controls="nav-ll" aria-selected="false">လက်လီ</button>
          <button class="nav-link" id="nav-order-tab" data-bs-toggle="tab" data-bs-target="#nav-order" type="button" role="tab" aria-controls="nav-order" aria-selected="false">ကားအော်ဒါ</button>
          <button class="nav-link" id="nav-in-tab" data-bs-toggle="tab" data-bs-target="#nav-in" type="button" role="tab" aria-controls="nav-in" aria-selected="false">အဝင်ပိုင်း</button>
          <button class="nav-link" id="nav-syk-tab" data-bs-toggle="tab" data-bs-target="#nav-syk" type="button" role="tab" aria-controls="nav-syk" aria-selected="false">ငွေကိုင်</button>
          <button class="nav-link" id="nav-skk-tab" data-bs-toggle="tab" data-bs-target="#nav-skk" type="button" role="tab" aria-controls="nav-skk" aria-selected="false">ကားတင်</button>
          <!-- <button class="nav-link" id="nav-out-tab" data-bs-toggle="tab" data-bs-target="#nav-out" type="button" role="tab" aria-controls="nav-out" aria-selected="false">အပြင်သွား</button> -->
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-gthuk" role="tabpanel" aria-labelledby="nav-gthuk-tab" tabindex="0">
          <div class="create_form">
            <G_posts></G_posts>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-lk" role="tabpanel" aria-labelledby="nav-lk-tab" tabindex="0">
          <div class="create_form">
            <Sales_in></Sales_in>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-ll" role="tabpanel" aria-labelledby="nav-ll-tab" tabindex="0">
          <div class="create_form">
            <Sales_out></Sales_out>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab" tabindex="0">
          <div class="create_form">
            <CarOrder></CarOrder>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-in" role="tabpanel" aria-labelledby="nav-in-tab" tabindex="0">
          <div class="create_form">
            <Order_in></Order_in>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-syk" role="tabpanel" aria-labelledby="nav-syk-tab" tabindex="0">
          <div class="create_form">
            <Account></Account>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-skk" role="tabpanel" aria-labelledby="nav-skk-tab" tabindex="0">
          <div class="create_form">
            <audit></audit>
          </div>
        </div>
        <!-- <div class="tab-pane fade" id="nav-out" role="tabpanel" aria-labelledby="nav-out-tab" tabindex="0">
          <div class="create_form">
            <JutyCreate></JutyCreate>
          </div>
        </div> -->
      </div>
    </div>
  </template>
  
  
  
  
    
  <script>
  import G_posts from '@/components/Create2File/G_posts.vue'
  import Sales_in from '@/components/Create2File/Sales_in.vue'
  import Sales_out from '@/components/Create2File/Sales_out.vue'
  import CarOrder from '@/components/Create2File/CarOrder.vue'
  import Order_in from '@/components/Create2File/Order_in.vue'
  import Account from '@/components/Create2File/Account.vue'
  import Audit from '@/components/Create2File/Audit.vue'
  import JutyCreate from '@/components/Create3File/JutyCreate.vue'
  
  
  export default {
    components: {G_posts, Sales_in, Sales_out, CarOrder, Order_in, Account, Audit, JutyCreate  }
  }
  </script>
  
  
  
    
  <style scoped>
  .messages {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
  }
  
  .nav-link {
    background-color: #001d3d;
    color: #ffffff;
    font-weight: 600;
  }
  
  .create_form {
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    .create_form {
      padding: 15px;
    }
    .messages {
      padding: 10px;
    }
  }
  </style>
  
  