import { ref } from "vue";
import { db4 } from "@/firebase/config";

let getCalculat = () => {
  let Posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await db4.collection("calculatePosts").get();
      Posts.value = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      error.value = "Could not calculate";
    }
  };

  return { Posts, error, load };
};

export default getCalculat;
