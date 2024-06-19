<template>
  <div class="messages container">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-gthuk-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-gthuk-v1" type="button" role="tab" aria-controls="nav-gthuk-v1" aria-selected="true">G-ထွက် 1</button>
        <button class="nav-link" id="nav-lk-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-lk-v1" type="button" role="tab" aria-controls="nav-lk-v1" aria-selected="false">လက်ကား</button>
        <button class="nav-link" id="nav-ll-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-ll-v1" type="button" role="tab" aria-controls="nav-ll-v1" aria-selected="false">လက်လီ</button>
        <button class="nav-link" id="nav-order-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-order-v1" type="button" role="tab" aria-controls="nav-order-v1" aria-selected="false">ကားအော်ဒါ</button>
        <button class="nav-link" id="nav-in-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-in-v1" type="button" role="tab" aria-controls="nav-in-v1" aria-selected="false">အဝင်ပိုင်း</button>
        <button class="nav-link" id="nav-in-tab-v2" data-bs-toggle="tab" data-bs-target="#nav-in-v2" type="button" role="tab" aria-controls="nav-in-v2" aria-selected="false">ပစ္စည်းမှာ</button>
        <button class="nav-link" id="nav-syk-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-syk-v1" type="button" role="tab" aria-controls="nav-syk-v1" aria-selected="false">စာရင်းကိုင်</button>
        <button class="nav-link" id="nav-skk-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-skk-v1" type="button" role="tab" aria-controls="nav-skk-v1" aria-selected="false">စက်ကိုင်</button>
        <button class="nav-link" id="nav-out-tab-v1" data-bs-toggle="tab" data-bs-target="#nav-out-v1" type="button" role="tab" aria-controls="nav-out-v1" aria-selected="false">အပြင်သွား</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent-v1">
      <div class="tab-pane fade show active" id="nav-gthuk-v1" role="tabpanel" aria-labelledby="nav-gthuk-tab-v1" tabindex="0">
        <div class="create_form">
          <G_posts></G_posts>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-lk-v1" role="tabpanel" aria-labelledby="nav-lk-tab-v1" tabindex="0">
        <div class="create_form">
          <Sales_in></Sales_in>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-ll-v1" role="tabpanel" aria-labelledby="nav-ll-tab-v1" tabindex="0">
        <div class="create_form">
          <Sales_out></Sales_out>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-order-v1" role="tabpanel" aria-labelledby="nav-order-tab-v1" tabindex="0">
        <div class="create_form">
          <CarOrder></CarOrder>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-in-v1" role="tabpanel" aria-labelledby="nav-in-tab-v1" tabindex="0">
        <div class="create_form">
          <Order_in></Order_in>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-in-v2" role="tabpanel" aria-labelledby="nav-in-tab-v2" tabindex="0">
        <div class="create_form">
          <Order_in2></Order_in2>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-syk-v1" role="tabpanel" aria-labelledby="nav-syk-tab-v1" tabindex="0">
        <div class="create_form">
          <Account></Account>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-skk-v1" role="tabpanel" aria-labelledby="nav-skk-tab-v1" tabindex="0">
        <div class="create_form">
          <Audit></Audit>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-out-v1" role="tabpanel" aria-labelledby="nav-out-tab-v1" tabindex="0">
        <div class="create_form">
          <JutyCreate></JutyCreate>
        </div>
      </div>
    </div>
  </div>
</template>

  
  
  
  
    
<script>
import G_posts from '@/components/CreateFile/G_posts.vue'
import Sales_in from '@/components/CreateFile/Sales_in.vue'
import Sales_out from '@/components/CreateFile/Sales_out.vue'
import CarOrder from '@/components/CreateFile/CarOrder.vue'
import Order_in from '@/components/CreateFile/Order_in.vue'
import Account from '@/components/CreateFile/Account.vue'
import Audit from '@/components/CreateFile/Audit.vue'
import JutyCreate from '@/components/CreateFile/JutyCreate.vue'
import Order_in2 from '@/components/CreateFile/Order_in2.vue'


export default {
  components: {G_posts, Sales_in, Sales_out, CarOrder, Order_in, Account, Audit, JutyCreate, Order_in2  }
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

  