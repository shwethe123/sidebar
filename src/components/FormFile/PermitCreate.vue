<template>
    <form class="row g-3 needs-validation" novalidate @submit.prevent="addPost">
      <div class="col-md-4 position-relative">
        <label for="validationTooltip01" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="validationTooltip01"
          placeholder="name"
          v-model="name"
          required
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="col-md-4 position-relative">
        <label for="validationTooltip02" class="form-label">Start Date</label>
        <input
          type="text"
          class="form-control"
          id="validationTooltip02"
          placeholder="အချိန်"
          v-model="start_time"
          required
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="col-md-4 position-relative">
        <label for="validationTooltip03" class="form-label">End Date</label>
        <input
          type="text"
          class="form-control"
          id="validationTooltip03"
          placeholder="အချိန်"
          v-model="end_time"
          required
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
      <div class="col-md-6 position-relative">
        <label for="validationTooltip04" class="form-label">အကြောင်းအရာ</label>
        <input
          type="text"
          class="form-control"
          id="validationTooltip04"
          placeholder="အကျိုးအကြောင်း"
          v-model="content"
          required
        />
        <div class="invalid-tooltip">Please provide a valid city.</div>
      </div>
      <div class="col-md-3 position-relative">
        <label for="validationTooltip05" class="form-label">Loca</label>
        <select
          class="form-select"
          id="validationTooltip05"
          v-model="loca"
          required
        >
          <option selected disabled value="">တည်နေရာ</option>
          <option>ဆိုင်(၁)</option>
          <option>ဆိုင်(၂)</option>
          <option>ဆိုင်(၃)</option>
        </select>
        <div class="invalid-tooltip">Please select a valid state.</div>
      </div>
      <div class="col-md-3 position-relative">
        <label for="validationTooltip06" class="form-label">ခွင့်ပြုသူ</label>
        <input
          type="text"
          class="form-control"
          id="validationTooltip06"
          v-model="permit"
          required
        />
        <div class="invalid-tooltip">Please provide a valid zip.</div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  import { db4, serverTimestamp } from "@/firebase/config";
  import { ref } from "vue";
  
  export default {
    setup() {
      const router = useRouter();
      const name = ref("");
      const start_time = ref("");
      const end_time = ref("");
      const loca = ref("");
      const content = ref("");
      const permit = ref("");
  
      const addPost = async () => {
        if (!name.value || !start_time.value || !end_time.value || !loca.value || !content.value || !permit.value) {
          alert("အချက်အလက် အရင်ဖြည့်ပါ");
          return;
        }
        
        const newPost = {
          name: name.value,
          start_time: start_time.value,
          end_time: end_time.value,
          loca: loca.value,
          content: content.value,
          permit: permit.value,
          create_at: serverTimestamp(),
        };
        
        try {
          await db4.collection("permitPosts").add(newPost);
          window.location.reload(); // Refresh the page after form submission
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };
  
      return { name, start_time, end_time, loca, content, permit, addPost };
    },
  };
  </script>
  
  <style scoped>
  .row {
    padding: 0;
    margin: 0 auto;
  }
  </style>
  