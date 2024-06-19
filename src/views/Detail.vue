<template>
  <div class="detail">
    <!-- <p>Details</p> -->
    <div v-if="error">{{ error }}</div>
    
    <div v-else-if="post && sales_in && sales_out && car_order">
      <SinglePost :post="post" :postTow="sales_in" :salesOut="sales_out" :car_order="car_order"></SinglePost>
    </div>
    <div v-else class="loading">
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
      </button>
    </div>
    
  </div>
</template>


<script>
import getPost from '@/composables/getPost';
import SinglePost from '@/components/SinglePost.vue';
import { useRouter } from 'vue-router';

export default {
  components: { SinglePost },
  props: {
    id: {
      type: String,
      required: true
    }
  },
setup(props) {
  const router = useRouter();
  const { post, sales_in, sales_out, car_order, error, load } = getPost(props.id);
  load();

  // console.log('post:', post);
  // console.log('sales_in:', sales_in);
  // console.log('sales_out:', sales_out);



  return { post, sales_in, sales_out, car_order, error,  };
}
}
</script>


<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  /* align-items: center; */
  height: 100vh;
  width: 100%;
  font-size: 30px;
  color: rgb(167, 167, 167);
  /* font-weight: 300; */
}
.loading {
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  align-items: center;
  text-align: center;
  justify-content: center;

}
</style>
