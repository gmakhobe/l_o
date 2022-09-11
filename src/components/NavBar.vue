<script setup>
  import { onMounted } from "vue";
  import { RouterLink } from 'vue-router'

  const props = defineProps(["title", "is_home"]);

  onMounted((info) => {
    console.log("Our prop - Title => ", props.title);
    console.log("Our prop - Boolean => ", props.is_home);
  });
</script>

<template>
  <div v-if="props.is_home" class="navbar">
    <RouterLink  class="nav-title nav-fill nav-text">{{props.title}}</RouterLink>
    <RouterLink to="/about" class="nav-link nav-fill nav-text">&#9888;</RouterLink>
  </div>
  <div v-else class="navbar">
    <RouterLink to="/" class="nav-title nav-fill nav-text">&#x276E;</RouterLink>
    <p class="nav-link nav-fill nav-text">{{props.title}}</p>
  </div>
</template>

<style>
  .nav-text {
    font-size: 2rem;
  }

  .nav-link {
    text-align: right;
    border-radius: 25%;
    padding: 0px;
    margin: 10px;
  }
  .nav-title {
    text-align: left;
    font-weight: 1000;
    padding: 3px;
    margin: 5px;
  }

  .nav-fill {
    flex: 1 1 auto;
  }

  .navbar{
    padding: 0px;
    margin: 0px;
    border-bottom: 2px solid white;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>