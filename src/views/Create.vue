<template>
  <div >
    <div class="container">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ဆိုင် (၁)</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ဆိုင် (၂)</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">ဆိုင် (၃)</button>
      </li>
    </ul>
    </div>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        <LocaOne></LocaOne>
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
        <LocaTwo></LocaTwo>
      </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
        <LocaThree></LocaThree>
      </div>
    </div>
  </div>
</template>

<script>
import LocaOne from './CreateLocaFile/LocaOne.vue';
import LocaTwo from './CreateLocaFile/LocaTwo.vue';
import LocaThree from './CreateLocaFile/LocaThree.vue';

export default {
  components: { LocaOne, LocaTwo, LocaThree },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 700;
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  color: #001d3d;
  border: 1px solid #001d3d;
  border-radius: 30px;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover, .nav-link.active {
  background-color: #001d3d;
  color: #fff;
}

.tab-content {
  width: 100%;
  /* padding-top: 20px; */
  /* background-color: #ffffff; */
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

.tab-pane {
  padding: 20px;
}
</style>
