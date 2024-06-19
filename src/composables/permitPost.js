import { ref } from "vue";
import { db4 } from "@/firebase/config";

let permitPosts = () => {
    let posts = ref([]);
    let error = ref('');

    let load = async () => {
        try {
            let response = await db4.collection("permitPosts").orderBy("end_time").get();
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

export default permitPosts;
