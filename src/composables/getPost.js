import { ref } from "vue";
import { db1, db2, db3, serverTimestamp } from "@/firebase/config";

let getPost = (id) => {
  let post = ref(null);
  let sales_in = ref(null);
  let sales_out = ref(null);
  let car_order = ref (null);
  let error = ref("");

  let load = async () => {
    try {
      let [postsResponse, sales_inResponse, sales_outResponse, car_orderResponse] = await Promise.all([
        db1.collection("g_posts").doc(id).get(),
        db1.collection("sales_in").doc(id).get(),
        db1.collection("sales_out").doc(id).get(),
        db1.collection("car_order").doc(id).get()
      ]);

      post.value = { id: postsResponse.id, ...postsResponse.data() };
      sales_in.value = { id: sales_inResponse.id, ...sales_inResponse.data() };
      sales_out.value = { id: sales_outResponse.id, ...sales_outResponse.data() };
      car_order.value = { id: car_orderResponse.id, ...car_orderResponse.data() };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, sales_in, sales_out, car_order, error, load };
};

export default getPost;
