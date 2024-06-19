<template>
    <div class="container">
        <!-- <h5>နေ့တပိုင် ခွင့်ဇယား</h5> -->
        <table class="table">
            <thead class="table-info">
                <tr>
                    <th scope="col">Loca</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">အချိန်</th>
                    <th scope="col">အကြောင်းအရာ</th>
                    <th scope="col">ခွင့်ပြုသူ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.out_loca }}</td>
                    <td>{{ post.out_name }}</td>
                    <td class="date">{{ post.out_time }}</td>
                    <td>{{ post.out_loca2 }}</td>
                    <td>{{ post.out_content }}</td>
                    <td>{{ post.out_permit }}</td>
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

}
</script>

<style scoped>
.table {
    width: 100%;
    font-size: 15px;
    color: rgb(10, 10, 10);
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Add padding to table cells for better readability */
.table td, .table th {
    padding: 10px;
}

@media screen and (max-width: 768px) {
    .table thead {
        display: none; /* Hide table headers on small screens */
    }

    .table, .table tbody, .table tr, .table td {
        display: block; /* Display table rows as block elements */
        width: 100%;
    }

    .table tr {
        margin-bottom: 15px;
    }

    .table td {
        text-align: right; /* Align text to the right */
        padding-left: 50%; /* Create space for labels */
        position: relative;
    }

    .table td::before {
        content: attr(data-label); /* Use the data-label attribute for pseudo-element content */
        position: absolute;
        left: 10px;
        width: calc(50% - 20px); /* Adjust width accordingly */
        padding-right: 10px; /* Adjust padding */
        white-space: nowrap;
        text-align: left; /* Align labels to the left */
        font-weight: bold;
    }
}
.date {
    color: red;
    font-weight: 800;
    border-radius: 5px;
}
h5 {
    text-align: center;
    font-weight: 600;
}
</style>
