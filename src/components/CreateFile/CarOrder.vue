<template>
  <div class="form-container">
    <form class="row g-3 needs-validation" @submit.prevent="addPost">
      <h2>Job Application</h2><br>
      <p class="p_text">Please complete the form below to apply for a position with us.</p>

      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Name</label>
        <input placeholder="name" type="text" class="form-control" id="validationCustom01" v-model="name" required>
        <div class="invalid-feedback">
          Name is required.
        </div>
      </div>

      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Id name</label>
        <input placeholder="ag" type="text" class="form-control" id="validationCustom02" v-model="id_name" required>
        <div class="invalid-feedback">
          Id name is required.
        </div>
      </div>

      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Nrc</label>
        <input placeholder="nrc" type="text" class="form-control" id="validationCustom02" v-model="nrc" required>
        <div class="invalid-feedback">
          Nrc is required.
        </div>
      </div>

      <h3>Birth Date</h3>
      <div class="col-md-4">
        <label for="inputDay" class="form-label">Day</label>
        <select id="inputDay" class="form-select" v-model="birthDay" required>
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
        <div class="invalid-feedback">
          Birth Day is required.
        </div>
      </div>
      <div class="col-md-4">
        <label for="inputMonth" class="form-label">Month</label>
        <select id="inputMonth" class="form-select" v-model="birthMonth" required>
          <option v-for="(month, index) in months" :key="index" :value="index+1">{{ month }}</option>
        </select>
        <div class="invalid-feedback">
          Birth Month is required.
        </div>
      </div>
      <div class="col-md-4">
        <label for="inputYear" class="form-label">Year</label>
        <select id="inputYear" class="form-select" v-model="birthYear" required>
          <option class="" v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
        <div class="invalid-feedback">
          Birth Year is required.
        </div>
      </div>

      <h2>Current Address</h2>

      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="address" required>
        <div class="invalid-feedback">
          Address is required.
        </div>
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Phone</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="phone" v-model="phone" required>
        <div class="invalid-feedback">
          Phone is required.
        </div>
      </div>

      <h2>Department</h2>
      
      <div class="col-md-4">
        <label for="inputState" class="form-label">Loca</label>
        <select id="inputState" class="form-select" v-model="loca" required>
          <option value="" disabled selected>please select loca</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <div class="invalid-feedback">
          Loca is required.
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">ဌာန</label>
        <input placeholder="ဌာန" type="text" class="form-control" id="validationCustom02" v-model="department" required>
        <div class="invalid-feedback">
          Department is required.
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Work</label>
        <input placeholder="work" type="text" class="form-control" id="validationCustom02" v-model="work" required>
        <div class="invalid-feedback">
          Work is required.
        </div>
      </div>
      <button class="submit-btn">Apply</button>
    </form>
  </div>
</template>
  

  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { db1,db2, serverTimestamp } from "@/firebase/config"
  
  export default {
    setup() {
      const router = useRouter()
      const name = ref("")
      const id_name = ref("")
      const nrc = ref("")
      const address = ref("")
      const loca = ref("")
      const department = ref("")
      const phone = ref ("")
      const work = ref ("")
  
      const birthDay = ref(null)
      const birthMonth = ref(null)
      const birthYear = ref(null)
  
      const days = Array.from({ length: 31 }, (_, i) => i + 1)
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ]
      const currentYear = new Date().getFullYear()
      const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
  
      const addPost = async () => {
        const newPost = {
          name: name.value,
          id_name: id_name.value,
          nrc: nrc.value,
          address: address.value,
          phone : phone.value,
          loca: loca.value,
          department: department.value,
          work : work.value,
          created_at : serverTimestamp(),
          birthDate: `${birthYear.value}-${birthMonth.value}-${birthDay.value}`
        }
        const res = await db1.collection("car_order").add(newPost)
        console.log(res)
        router.push("/")
      }
  
      return { name, id_name, nrc, address, phone, loca, department, work, addPost, birthDay, birthMonth, birthYear, days, months, years }
    }
  }
  </script>
  

  <style scoped>
  h2 {
    font-weight: 800;
    text-align: center;
  }
  .p_text {
    text-align: center;
  }
  
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  form {
    display: flex;
    flex-wrap: wrap;
    /* background-color: #eae6f0; */
    /* flex-direction: column; */
    /* gap: 20px; */
    /* max-width: 500px; */
    width: 100%;
  }
  
  .col-md-4 {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
  
  .submit-btn {
    padding: 15px 20px;
    background-color:#001d3d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight:800;
  }
  
  .submit-btn:hover {
    background-color: #003566;
  }
  
  @media (max-width: 600px) {
    .form-container {
      padding: 10px;
    }
  
    form {
      max-width: 100%;
    }
  }
  </style>