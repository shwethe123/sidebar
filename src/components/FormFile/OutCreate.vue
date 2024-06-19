<template>
    <form class="row g-3 needs-validation" novalidate @submit.prevent="addPost">
        <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">Name</label>
            <input type="text" class="form-control" id="validationTooltip01" placeholder="နာမည်" required v-model="out_name">
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label">Start Date</label>
            <input type="text" class="form-control" id="validationTooltip02" placeholder="ရက်" required v-model="out_time">
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        <div class="col-md-3 position-relative">
            <label for="validationTooltip06" class="form-label">ခွင့်ပြုသူ</label>
            <input type="text" class="form-control" id="validationTooltip06" placeholder="ခွင့်ပြုသူ" required v-model="out_permit">
            <div class="invalid-tooltip">
                Please provide a valid zip.
            </div>
        </div>
        <div class="col-md-6 position-relative">
            <label for="validationTooltip04" class="form-label">အကြောင်းအရာ</label>
            <input type="text" class="form-control" id="validationTooltip04" placeholder="အကြိုးအကြောင်း" required v-model="out_content">
            <div class="invalid-tooltip">
                Please provide a valid city.
            </div>
        </div>
        <div class="col-md-3 position-relative">
            <label for="validationTooltip05" class="form-label">Loca</label>
            <select class="form-select" id="validationTooltip05" required v-model="out_loca">
                <option selected disabled value="">တည်နေရာ ရွေးရန်</option>
                <option>ဆိုင် (၁)</option>
                <option>ဆိုင်(၂)</option>
                <option>ဆိုင်(၃)</option>
            </select>
            <div class="invalid-tooltip">
                Please select a valid state.
            </div>
        </div>
        <div class="col-md-3 position-relative">
            <label for="validationTooltip05" class="form-label">Loca</label>
            <select class="form-select" id="validationTooltip05" required v-model="out_loca2">
                <option selected disabled value="">ရွေးရန်</option>
                <option>မနက်ပိုင်း</option>
                <option>ညနေပိုင်း</option>
            </select>
            <div class="invalid-tooltip">
                Please select a valid state.
            </div>
        </div>

        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
    </form>
</template>

<script>
import { useRouter } from 'vue-router'
import { db4, serverTimestamp } from '@/firebase/config'
import { ref } from 'vue'
export default {
    setup () {
        let router = useRouter()
        let out_name = ref ("")
        let out_time = ref ("")
        let out_loca = ref ("")
        let out_loca2 = ref ("")
        let out_content = ref ("")
        let out_permit = ref ("")

        let addPost = async() => {
            if (!out_name.value || !out_time.value || !out_permit.value || !out_content.value || !out_loca.value || !out_loca2.value) {
                alert("အချက်အလက် အရင်ဖြည့်ပါ");
                return;
            }
            let newPost = {
                out_name: out_name.value,
                out_time: out_time.value,
                out_loca: out_loca.value,
                out_loca2: out_loca2.value,
                out_content: out_content.value,
                out_permit: out_permit.value,
                create_at : serverTimestamp()
            }
            try {
                let res = await db4.collection("outPosts").add(newPost)
                window.location.reload() // Refresh the page after form submission
            } catch (error) {
                console.error("Error adding document: ", error)
            }
        }

        return { out_name, out_time, out_loca, out_loca2, out_content, out_permit, addPost }
    }
}
</script>

<style scoped>
    .row {
        padding: 0px;
        margin: 0 auto;
    }
</style>
