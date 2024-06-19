import { ref } from "vue"
import {db4 } from "@/firebase/config"

let outPosts = () => {
    let posts = ref ([]);
    let error = ref ('');

    let load = async () => {
        try {
            let response = await db4.collection("outPosts").orderBy("create_at").get();
            posts.value = response.docs.map((doc) => {
                return {
                    id:doc.id,
                    ...doc.data()
                };
            });
        } catch (error) {
            error.value = "could not fetch date"
        }
    };
    return {posts,error,load};
};
export default outPosts;