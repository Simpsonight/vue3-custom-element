<template>
  <div class="app">
    <div id="nav">
      <router-link to="/">Rout 1</router-link> |
      <router-link to="/dummy-view">Rout 2</router-link>
    </div>
    <hr />
    <div class="app__content">
      <router-view />
      <div>Is Active: {{ isActive }}</div>
      <button @click="toggleActive">Toggle</button>
      <Filter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Filter from "@/components/Filter.vue";

let isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss">
.app {
  background: red;
  &__content {
    max-width: $size-app-max-width;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-bottom: $grid-20;

    @media screen and (min-width: $size-mobile-breakpoint) {
      flex-direction: row;
    }
  }
}
</style>
