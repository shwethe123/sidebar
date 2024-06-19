<template>
  <div class="container">
    <div v-if="post.name" class="card">
      <h3 class="card-title">Details</h3>
      <div class="card-layout">
        <div>
          <p><strong><i class="bi bi-person"></i> Name:</strong> {{ post.name }}</p>
          <p><strong><i class="bi bi-card-text"></i> NRC:</strong> {{ post.nrc }}</p>
          <p><strong><i class="bi bi-cake"></i> Birth Date:</strong> {{ post.birthDate }}</p>
          <p><strong><i class="bi bi-building"></i> City:</strong> {{ post.address }}</p>
          <p><strong><i class="bi bi-credit-card"></i> ID:</strong> {{ post.id_name }}</p>
          <p><strong><i class="bi bi-building"></i> အလုပ်ဌာန:</strong> {{ post.department }}</p>
        </div>
        <div>
          <p><strong><i class="bi bi-building"></i> City:</strong> {{ post.city }}</p>
          <p><strong><i class="bi bi-diagram-3"></i> Department:</strong> {{ post.department }}</p>
          <p><strong><i class="bi bi-telephone"></i> Phone:</strong> {{ post.phone }}</p>
          <p><strong><i class="bi bi-shop"></i> ဆိုင်တည်နေရာ:</strong> {{ post.loca }}</p>
          <p><strong><i class="bi bi-briefcase"></i> အလုပ်:</strong> {{ post.work }}</p>
        </div>
      </div>
      <button @click="goHome" type="button" class="btn btn-success">Go Home</button>
    </div>

    <div v-if="postTow.name" class="card">
      <h3 class="card-title">Details</h3>
      <ul class="list-group">
        <li class="list-group-item"><strong><i class="bi bi-person"></i> Name:</strong> {{ postTow.name }}</li>
        <li class="list-group-item"><strong><i class="bi bi-card-text"></i> NRC:</strong> {{ postTow.nrc }}</li>
        <li class="list-group-item"><strong><i class="bi bi-cake"></i> Birth Date:</strong> {{ postTow.birthDate }}</li>
        <li class="list-group-item"><strong><i class="bi bi-geo-alt"></i> Address:</strong> {{ postTow.address }}</li>
        <li class="list-group-item"><strong><i class="bi bi-building"></i> City:</strong> {{ postTow.city }}</li>
        <li class="list-group-item"><strong><i class="bi bi-diagram-3"></i> Department:</strong> {{ postTow.department }}</li>
        <li class="list-group-item"><strong><i class="bi bi-telephone"></i> Phone:</strong> {{ postTow.phone }}</li>
      </ul>
      <button @click="goHome" type="button" class="btn btn-success mt-3">Go Home</button>
    </div>

    <div v-if="salesOut.name" class="card">
      <h3 class="card-title">Details</h3>
      <div class="card-content">
        <p><strong><i class="bi bi-person"></i> Name:</strong> {{ salesOut.name }}</p>
        <p><strong><i class="bi bi-card-text"></i> NRC:</strong> {{ salesOut.nrc }}</p>
        <p><strong><i class="bi bi-cake"></i> Birth Date:</strong> {{ salesOut.birthDate }}</p>
        <p><strong><i class="bi bi-geo-alt"></i> Address:</strong> {{ salesOut.address }}</p>
        <p><strong><i class="bi bi-building"></i> City:</strong> {{ salesOut.city }}</p>
        <p><strong><i class="bi bi-diagram-3"></i> Department:</strong> {{ salesOut.department }}</p>
        <p><strong><i class="bi bi-telephone"></i> Phone:</strong> {{ salesOut.phone }}</p>
      </div>
      <button @click="goHome" type="button" class="btn btn-success mt-3">Go Home</button>
    </div>

    <div v-if="car_order.name" class="card">
      <h3 class="card-title">Details</h3>
      <div class="card-content">
        <p><strong><i class="bi bi-person"></i> Name:</strong> {{ car_order.name }}</p>
        <p><strong><i class="bi bi-card-text"></i> NRC:</strong> {{ car_order.nrc }}</p>
        <p><strong><i class="bi bi-cake"></i> Birth Date:</strong> {{ car_order.birthDate }}</p>
        <p><strong><i class="bi bi-geo-alt"></i> Address:</strong> {{ car_order.address }}</p>
        <p><strong><i class="bi bi-building"></i> City:</strong> {{ car_order.city }}</p>
        <p><strong><i class="bi bi-diagram-3"></i> Department:</strong> {{ car_order.department }}</p>
        <p><strong><i class="bi bi-telephone"></i> Phone:</strong> {{ car_order.phone }}</p>
      </div>
      <button @click="goHome" type="button" class="btn btn-success mt-3">Go Home</button>
    </div>
  </div>
</template>




<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    postTow: {
      type: Object,
      required: true
    },
    salesOut: {
      type: Object,
      required: true
    },
    car_order: {
      type: Object,
      required: true
    }
  },
  setup() {
    const router = useRouter();

    const goHome = () => {
      router.push('/');
    };

    return { goHome };
  },
  mounted() {
    console.log('post:', this.post);
    console.log('postTow:', this.postTow);
    console.log('salesOut:', this.salesOut);
  }
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  background-color: #001d3d;
  font-size: 1.5em;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
}

.card-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

p {
  margin: 5px 0;
  color: #001d3d;
  padding: 10px;
}

ul.list-group {
  padding: 0;
  list-style: none;
}

li.list-group-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

li.list-group-item:last-child {
  border-bottom: none;
}

.btn-success {
  margin-top: 10px;
  width: 100%;
  background-color: #001d3d;
  font-weight: 700;
}

button {
  padding: 10px;
  background-color: #001d3d;
  font-weight: 700;
  border: none;
  color: white;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .card-layout {
    grid-template-columns: 1fr;
  }
}

</style>
