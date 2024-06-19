<template>
  <div>
    <h1>အောက် အလုပ်ကြမ်းတွက်ချက်ရန်</h1>
    <div class="Calculate">
      <div>
        <label for="">ဆိုင် (၁)</label>
        <input v-model.number="number1" required placeholder="အလုပ်ကြမ်း" />
        <input v-model.number="number2" required placeholder="ကားနောက်လိုက်" />
      </div>
      <div>
        <label for="">ဆိုင် (၂)</label>
        <input v-model.number="number3" required placeholder="အလုပ်ကြမ်း" />
        <input v-model.number="number4" required placeholder="ကားနောက်လိုက်" />
      </div>
      <div>
        <label for="">ဆိုင် (၃)</label>
        <input v-model.number="number5" required placeholder="အလုပ်ကြမ်း" />
        <input v-model.number="number6" required placeholder="ကားနောက်လိုက်" />
      </div>
    </div>
    <button @click="calculate" :disabled="!isValidForm">Calculate</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { db4 } from "@/firebase/config";

export default {
  name: "CalculationForm",
  setup() {
    const number1 = ref(null);
    const number2 = ref(null);
    const number3 = ref(null);
    const number4 = ref(null);
    const number5 = ref(null);
    const number6 = ref(null);

    const loca1 = ref(0);
    const loca1F = ref(0);
    const loca1E = ref(0);
    const loca2 = ref(0);
    const loca2F = ref(0);
    const loca2E = ref(0);
    const loca3 = ref(0);
    const loca3F = ref(0);
    const loca3E = ref(0);
    const total = ref(0);

    const isValidForm = computed(() => {
      return (
        number1.value !== null &&
        number2.value !== null &&
        number3.value !== null &&
        number4.value !== null &&
        number5.value !== null &&
        number6.value !== null
      );
    });

    const calculate = async () => {
      loca1.value = number1.value + number2.value;
      loca1F.value = number1.value;
      loca1E.value = number2.value;
      loca2.value = number3.value + number4.value;
      loca2F.value = number3.value;
      loca2E.value = number4.value;
      loca3.value = number5.value + number6.value;
      loca3F.value = number5.value;
      loca3E.value = number6.value;
      total.value = loca1.value + loca2.value + loca3.value;

      const newPost = {
        loca1: loca1.value,
        loca1F: loca1F.value,
        loca1E: loca1E.value,
        loca2: loca2.value,
        loca2F: loca2F.value,
        loca2E: loca2E.value,
        loca3: loca3.value,
        loca3F: loca3F.value,
        loca3E: loca3E.value,
        total: total.value,
      };

      try {
        await db4.collection("calculatePosts").doc("calculation").set(newPost);
        alert("Data saved to Firebase!");
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    };

    return {
      number1,
      number2,
      number3,
      number4,
      number5,
      number6,
      loca1,
      loca1F,
      loca1E,
      loca2,
      loca2F,
      loca2E,
      loca3,
      loca3F,
      loca3E,
      total,
      calculate,
      isValidForm,
    };
  },
};
</script>

<style scoped>
input {
  margin: 5px;
  padding: 5px;
  font-size: 1em;
}
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
.Calculate {
  display: flex;
  flex-direction: column;
}
</style>
