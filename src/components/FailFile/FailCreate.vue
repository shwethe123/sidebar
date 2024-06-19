<template>
    <form class="row gy-2 gx-3 align-items-center" @submit.prevent="addPost">
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput">Loca</label>
            <input type="text" class="form-control" id="autoSizingInput" placeholder="ဖိုင်းထိသူနာမည်" required v-model="name">
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingSelect">Preference</label>
            <input type="text" class="form-control" id="autoSizingInput"
             placeholder="ဖိုင်းရက်" required v-model="fail_time">
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingSelect">Preference</label>
            <select class="form-select" id="autoSizingSelect" required v-model="loca">
                <option value="1">ဆိုင် (၁)</option>
                <option value="2">ဆိုင် (၂)</option>
                <option value="3">ဆိုင် (၃)</option>
            </select>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>

<script>
import { db4, serverTimestamp } from "@/firebase/config"
import { ref } from 'vue'
export default {
    setup () {
        let name = ref ("");
        let loca = ref ("");
        let fail_time = ref ("");
        let addPost = async () => {
            let newPost = {
                name : name.value,
                loca : loca.value,
                fail_time : fail_time.value,
                created_at : serverTimestamp()
            }
        try {
            let res = await db4.collection("fail_post").add(newPost);
            window.location.reload()
        } catch (error) {
            console.error("Error adding document",error)
        }
        }
        return { name,loca,fail_time,addPost}
    }
}
</script>

<style>

</style>