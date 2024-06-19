<template>
    <nav>
      <div class="nav" v-if="user">
          <div>
              <p v-if="user">
                <i class="bi bi-person-vcard-fill"></i> :
                {{user.displayName}}
            </p>
              <p class="email" v-if="user">
                <i class="bi bi-envelope-at-fill"></i> : {{ user.email }}
            </p>
          </div>
          <div class="clock">
            <Clock></Clock>
          </div>
          <button @click="logout" type="button" class="btn btn-outline-danger">Logout</button>
      </div>
    </nav>
  </template>
  
  <script>
import { auth } from '@/firebase/config'
import getUser from '@/composables/getUser'
import { ref } from 'vue'
import Clock from '../Clock/Clock.vue'
  export default {
  components: { Clock },
    setup() {
        
        let error =  ref ("");

        let {user} = getUser();

        let logout = async () => {
            try {
                auth.signOut()
                console.log("user logout")
            } catch (error) {
                error.value = error.message
                console.log(error)
            }
        }
       
        return{logout,error,user}
    }
  }
  </script>
  
  <style scoped>
      .nav {
          padding: 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      nav p {
          margin: 2px auto;
          font-size: 16px;
          color: #444;
      }
      nav p.email {
          font-size: 14px;
          color: #999;
      }
      .bi {
        font-size: 18px;
        color: #007bff;
      }
      .clock {
        font-weight: 800;
      }
  </style>