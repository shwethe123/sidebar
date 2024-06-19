<template>
  <div class="Overview">
    <!-- <Date></Date> -->
    <div>
      <EachOver1></EachOver1>
    </div>
    <div>
      <EachOver2></EachOver2>
    </div>
    <div>
      <EachOver3></EachOver3>
    </div>
    <CalculatePost></CalculatePost>
    <div>
      <FormsOnev></FormsOnev>
    </div>
    <div>
      <FailFormV></FailFormV>
    </div>
    <div>
      <OutFormv></OutFormv>
      
    </div>
  </div>
</template>

<script>
import EachOver1 from './EachOver/EachOver1.vue';
import EachOver2 from './EachOver/EachOver2.vue';
import EachOver3 from './EachOver/EachOver3.vue';
import FormsOnev from '@/components/FormFile/FormsOnev.vue';
import OutFormv from '@/components/FormFile/OutFormv.vue';
import CalculatePost from '@/components/FormFile/CalculatePost.vue';
import Date from '@/components/Clock/Date.vue';
import FailFormV from '@/components/FailFile/FailFormV.vue';

export default {
  components: { EachOver1, EachOver2, EachOver3, FormsOnev,CalculatePost, OutFormv, Date, FailFormV },
};
</script>

<style scoped>
.Overview {
  display: grid;
  grid-template-rows: 1fr;
  gap: 20px;
  height: auto;
  margin: 0px auto;
  max-width: 2000px;
  font-size: 30px;
  color: rgb(167, 167, 167);
  font-weight: 500;
  padding: 0px;
  box-sizing: border-box;
  overflow-y: auto;
}

.Overview > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .Overview {
    grid-template-columns: 1fr;
    font-size: 24px;
  }
  .Overview > * {
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  .Overview {
    font-size: 18px;
  }
}
</style>
