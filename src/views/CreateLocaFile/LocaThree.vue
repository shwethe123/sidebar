<template>
  <div class="messages container">
    <nav>
      <div class="nav nav-tabs" id="nav-tab-v2" role="tablist">
        <button class="nav-link active" id="nav-gthuk-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-gthuk-v2" type="button" role="tab" aria-controls="nav-gthuk-v2" aria-selected="true">G-ထွက် </button>
        <button class="nav-link" id="nav-lk-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-lk-v2" type="button" role="tab" aria-controls="nav-lk-v2" aria-selected="false">စလစ်/မြို့ပြင်</button>
        <button class="nav-link" id="nav-ll-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-ll-v2" type="button" role="tab" aria-controls="nav-ll-v2" aria-selected="false">မြို့တွင်းရောင်း</button>
        <button class="nav-link" id="nav-order-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-order-v2" type="button" role="tab" aria-controls="nav-order-v2" aria-selected="false">ကားအော်ဒါ</button>
        <!-- <button class="nav-link" id="nav-in-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-in-v2" type="button" role="tab" aria-controls="nav-in-v2" aria-selected="false">ငွေကိုင်</button> -->
        <button class="nav-link" id="nav-syk-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-syk-v2" type="button" role="tab" aria-controls="nav-syk-v2" aria-selected="false">ငွေကိုင်</button>
        <!-- <button class="nav-link" id="nav-skk-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-skk-v2" type="button" role="tab" aria-controls="nav-skk-v2" aria-selected="false">ကားတင်</button> -->
        <!-- <button class="nav-link" id="nav-out-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-out-v2" type="button" role="tab" aria-controls="nav-out-v2" aria-selected="false">အပြင်သွား</button> -->
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent-v2">
      <div class="tab-pane fade show active" id="nav-gthuk-v2" role="tabpanel" aria-labelledby="nav-gthuk-tab-v2" tabindex="0">
        <div class="create_form">
          <G_posts></G_posts>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-lk-v2" role="tabpanel" aria-labelledby="nav-lk-tab-v2" tabindex="0">
        <div class="create_form">
          <Sales_in></Sales_in>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-ll-v2" role="tabpanel" aria-labelledby="nav-ll-tab-v2" tabindex="0">
        <div class="create_form">
          <Sales_out></Sales_out>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-order-v2" role="tabpanel" aria-labelledby="nav-order-tab-v2" tabindex="0">
        <div class="create_form">
          <CarOrder></CarOrder>
        </div>
      </div>
      <!-- <div class="tab-pane fade" id="nav-in-v2" role="tabpanel" aria-labelledby="nav-in-tab-v2" tabindex="0">
        <div class="create_form">
          <Order_in></Order_in>
        </div>
      </div> -->
      <div class="tab-pane fade" id="nav-syk-v2" role="tabpanel" aria-labelledby="nav-syk-tab-v2" tabindex="0">
        <div class="create_form">
          <Account></Account>
        </div>
      </div>
      <!-- <div class="tab-pane fade" id="nav-skk-v2" role="tabpanel" aria-labelledby="nav-skk-tab-v2" tabindex="0">
        <div class="create_form">
          <Audit></Audit>
        </div>
      </div> -->
      <!-- <div class="tab-pane fade" id="nav-out-v2" role="tabpanel" aria-labelledby="nav-out-tab-v2" tabindex="0">
        <div class="create_form">
          <JutyCreate></JutyCreate>
        </div>
      </div> -->
    </div>
  </div>
</template>

  
  
  
  
    
<script>
import Sales_in from '@/components/Create3File/Sales_in.vue'
import Sales_out from '@/components/Create3File/Sales_out.vue'
import CarOrder from '@/components/Create3File/CarOrder.vue'
import Order_in from '@/components/Create3File/Order_in.vue'
import Account from '@/components/Create3File/Account.vue'
import Audit from '@/components/Create3File/Audit.vue'
import JutyCreate from '@/components/Create3File/JutyCreate.vue'
import G_posts from '@/components/Create3File/G_posts.vue'

export default {
  components: { G_posts, Sales_in, Sales_out, CarOrder, Order_in, Account, Audit, JutyCreate }
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
    color: #001d3d;
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
  
  
  