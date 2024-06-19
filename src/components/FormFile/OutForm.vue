<template>
    <div>
        <!-- <h1>ခွင့်ဖိုင်</h1> -->

        <table class="table">
            <thead class="table-info">
                <tr>
                    <th scope="col">Loca</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">အချိန်</th>
                    <th scope="col">အကြောင်းအရာ</th>
                    <th scope="col">ခွင့်ပြုသူ</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.out_loca }}</td>
                    <td>{{ post.out_name }}</td>
                    <td>{{ post.out_time }}</td>
                    <td>{{ post.out_loca2 }}</td>
                    <td>{{ post.out_content }}</td>
                    <td>{{ post.out_permit }}</td>
                    <td>
                        <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { db4 } from '@/firebase/config';
import outPost from '@/composables/outPosts'

export default {
    props: ['s_post'],
    setup () {
        let { posts,error,load} = outPost();
        load();
        return {posts,error};
    },
    methods: {
        
        async deletePost(id) {
            
            try {
                await db4.collection("outPosts").doc(id).delete();
                this.$emit('post-deleted', id); // Emit event to parent to remove the deleted post from the list
                window.location.reload()
            } catch (error) {
                console.error("Error deleting document: ", error);
            }
        }
    }
}
</script>

<style scoped>
.table {
    /* background-color: teal; */
    /* border: 1px solid gray; */
    max-width: 100%;
    height: auto;
}
.router {
    /* color: red; */
    background-color: transparent;
    text-decoration: none;
}
</style>
