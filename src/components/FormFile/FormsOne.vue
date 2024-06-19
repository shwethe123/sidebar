<template>
    <div>
        <!-- <h1>ခွင့်ဖိုင်</h1> -->

        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Loca</th>
                    <th scope="col">Name</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">အကြောင်းအရာ</th>
                    <th scope="col">ခွင့်ပြုသူ</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in s_post" :key="post.id">
                    <td>{{ post.loca }}</td>
                    <td>{{ post.name }}</td>
                    <td>{{ post.start_time }}</td>
                    <td>{{ post.end_time }}</td>
                    <td>{{ post.content }}</td>
                    <td>{{ post.permit }}</td>
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
import permitPosts from '@/composables/permitPost';

export default {
    props: ['s_post'],
    setup () {
        let { posts,error,load} = permitPosts();
        load();
        return {posts,error};
    },
    methods: {
        
        async deletePost(id) {
            try {
                await db4.collection("permitPosts").doc(id).delete();
                this.$emit('post-deleted', id); // Emit event to parent to remove the deleted post from the list
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
