<template>
  <div :class="sassStyles.filter">
    <h2>Filter</h2>
    <div>Is Active Filter: {{ isActive }}</div>
    <button @click="toggleActive">Toggle</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import sassStyles from "./filter.module.scss";

let isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>
