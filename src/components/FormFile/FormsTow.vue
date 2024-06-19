<template>
    <div class="table-responsive">
        <h1>ဝမ်လုံးဆိုင် ဆိုင်(၂)</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">G-ထွက် </th>
                <th scope="col">အရောင်းပိုင်း လက်လီ </th>
                <th scope="col">အရောင်းပိုင်း လက်ကား </th>
                <th scope="col">အဝင်ပိုင်း </th> 
                <th scope="col">ငွေကိုင် </th>
                <th scope="col">ကားအော်ဒါ </th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="post in s_post_tow" :key="post">
                    <!-- <th scope="row">1</th> -->
                    <td >{{post.loca}}</td>
                    <td>{{ post.name}}</td>
                    <td>{{ post.start_time}}</td>
                    <td>{{ post.end_time }}</td>
                    <td>{{ post.content }}</td>
                    <td>{{ post.permit }}</td>
                </tr>
            </tbody>
        </table>
      </div>
</template>

<script>
export default {
    props: ["s_post_tow"]
}
</script>

<style scoped>
</style>