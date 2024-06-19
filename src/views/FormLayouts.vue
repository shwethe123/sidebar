<template>
  <div class="table-responsive">
    <!-- <div class="form">
      <FormsTow :s_sales_in="sales_in"></FormsTow>
    </div> -->
    <div class="formlayouts">
      <div class="form">
        <FormsOne :s_post="posts" @post-deleted="removePost"></FormsOne>
      </div>
      <div class="create_form">
        <PermitCreate></PermitCreate>
      </div>
      <div class="formlayouts">
        <div class="form">
          <FailForm></FailForm>
          <FailCreate></FailCreate>
        </div>
      </div>
    </div>
    <div class="formlayouts">
      <div class="form">
        <OutForm></OutForm>
      </div>
      <div class="create_form">
        <OutCreate></OutCreate>
      </div>
    </div>
    <div class="form">
      <CalculationForm></CalculationForm>
    </div>
    <div >
      <EachOver1V></EachOver1V>
      <EachOver2V></EachOver2V>
      <EachOver3V></EachOver3V>
    </div>
  </div>
</template>


<script>
import FormsOne from '@/components/FormFile/FormsOne.vue';
import FormsTow from '@/components/FormFile/FormsTow.vue';
import PermitCreate from '@/components/FormFile/PermitCreate.vue';
import permitPosts from "@/composables/permitPost";
import OutForm from '@/components/FormFile/OutForm.vue';
import OutCreate from '@/components/FormFile/OutCreate.vue';
import CalculationForm from '@/components/FormFile/CalculationForm.vue';
import EachOver1V from './EachOver/EachOver1V.vue';
import EachOver2V from './EachOver/EachOver2V.vue';
import EachOver3V from './EachOver/EachOver3V.vue';
import FailCreate from '@/components/FailFile/FailCreate.vue';
import FailForm from '@/components/FailFile/FailForm.vue';

export default {
    components: { FormsOne, FormsTow, PermitCreate, OutForm, CalculationForm, OutCreate, EachOver1V, EachOver2V, EachOver3V, FailCreate, FailForm },
    setup() {
        let { posts, error, load } = permitPosts();
        console.log(posts)
        load();
        const removePost = (id) => {
            posts.value = posts.value.filter(post => post.id !== id);
        };
        return { posts, error, removePost };
    }
}
</script>


<style scoped>
.table-responsive {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f8f9fa;
}

.formlayouts, .form {
  margin-bottom: 20px;
}

.create_form, .form {
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Ensuring the forms are stacked vertically */
.create_form, .form {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .table-responsive {
    padding: 10px;
  }

  .create_form, .form {
    padding: 10px;
  }
}
</style>

