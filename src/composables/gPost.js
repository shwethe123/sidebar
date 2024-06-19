import { ref } from "vue";
import { db5 } from "@/firebase/config";

let gPosts = () => {
    let posts = ref([]);
    let error = ref('');

    let load = async () => {
        try {
            let response = await db5.collection("g_posts").orderBy("create_at").get();
            posts.value = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            });
        } catch (err) {
            error.value = 'Could not fetch data';
        }
    };

    return { posts, error, load };
};

export default gPosts;
