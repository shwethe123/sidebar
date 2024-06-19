<template>
    <div class="calendar">
      <div class="header">
        <button class="btn btn-outline-info" @click="prevMonth">Previous</button>
        <h1>{{ currentMonthName }} {{ currentYear }}</h1>
        <button class="btn btn-outline-info" @click="nextMonth">Next</button>
      </div>
      <div class="days">
        <div v-for="day in daysOfWeek" :key="day" class="day-name">{{ day }}</div>
      </div>
      <div class="dates">
        <div v-for="day in calendarDays" :key="day.date" class="date" :class="{ 'current-month': day.currentMonth }">
          {{ day.date.getDate() }}
        </div>
      </div>
    </div>
      <div class="notpad">
        <NotPad></NotPad>
      </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import NotPad from '@/components/Clock/NotPad.vue'
  import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, eachDayOfInterval } from 'date-fns';
  
  const currentDate = ref(new Date());
  const currentYear = computed(() => format(currentDate.value, 'yyyy'));
  const currentMonthName = computed(() => format(currentDate.value, 'MMMM'));
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const startOfMonthDate = computed(() => startOfMonth(currentDate.value));
  const endOfMonthDate = computed(() => endOfMonth(currentDate.value));
  const startDate = computed(() => startOfWeek(startOfMonthDate.value));
  const endDate = computed(() => endOfWeek(endOfMonthDate.value));
  
  const calendarDays = computed(() => {
    const days = eachDayOfInterval({ start: startDate.value, end: endDate.value });
    return days.map(date => ({
      date,
      currentMonth: date.getMonth() === currentDate.value.getMonth(),
    }));
  });
  
  const nextMonth = () => {
    currentDate.value = addMonths(currentDate.value, 1);
  };
  
  const prevMonth = () => {
    currentDate.value = subMonths(currentDate.value, 1);
  };
  </script>
  
  <style scoped>
  .calendar {
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .days, .dates {
    display: grid;
    font-weight: 550;
    grid-template-columns: repeat(7, 1fr);
  }
  
  .day-name, .date {
    padding: 10px;
  }
  
  .current-month {
    background-color: #b1dff3;
    border-radius: 10px;
    margin: 2px;
  }
  h1 {
    font-weight: 700;
    background-color: #b1dff3;
    padding: 12px;
    border-radius: 5px;
  }
  .notpad {
    margin-top: 15px;
    background-color: #d7f2fd;
  }
  </style>
  