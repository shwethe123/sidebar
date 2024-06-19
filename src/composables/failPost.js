import { ref } from "vue";
import { db4 } from "@/firebase/config";

let failPost = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await db4.collection("fail_post").orderBy("created_at").get();
      posts.value = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    //   console.log("Fetched posts:", posts.value);
    } catch (err) {
      error.value = "Could not fetch data";
      console.error("Error fetching posts:", err);
    }
  };

  return { posts, error, load };
};

export default failPost;
