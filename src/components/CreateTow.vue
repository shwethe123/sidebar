<!-- <template>
    <form class="row g-3 needs-validation" novalidate @submit.prevent="addPost">
        <h2>ဆိုင်(၂)</h2>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">G-ထွက်</label>
            <input type="text" class="form-control" id="validationCustom01" v-model="name">
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">လက်လီ</label>
            <input type="text" class="form-control" id="validationCustom02" v-model="sales_on">
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">လက်ကား</label>
            <input type="text" class="form-control" id="validationCustom02" v-model="sales_out">
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">အဝင်ပိုင်း</label>
            <input type="text" class="form-control" id="validationCustom02" v-model="order_in">
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">ငွေကိုင်</label>
            <input type="text" class="form-control" id="validationCustom02" v-model="price_h">
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">ကားအော်ဒါ</label>
            <input type="text" class="form-control" id="validationCustom02" v-model="car_order">
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <button class="btn btn-primary">Primary</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { db1,db2 } from "@/firebase/config"
export default {
    setup () {
        let router = useRouter();
        let name = ref ([]);
        let sales_on = ref ('');
        let sales_out = ref ('');
        let order_in = ref ('');
        let price_h = ref ('');
        let car_order = ref ('');
        let addPost = async () => {
            let newPost = {
                name : name.value,
                sales_on : sales_on.value,
                sales_out : sales_out.value,
                order_in : order_in.value,
                price_h : price_h.value,
                car_order : car_order.value,
            }
            let res = db1.collection("sales_in").add(newPost);
            router.push("/FormLayouts")
        }
        return {name,sales_on,sales_out,order_in,price_h,car_order,addPost}
    }
}
</script>

<style scoped>

</style> -->