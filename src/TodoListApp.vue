<script setup>
  import { reactive } from "vue";
  import { RouterView } from 'vue-router'
  import NavBar from "./components/NavBar.vue";

  const homePageInd = true;
  const pageProperties = reactive({
    isNavInLandingPage : (homePageInd ? true : false),
    navDisplay: (homePageInd ? "&#x2611; To-Do" : "About")
  });
  
</script>

<template>
  <NavBar :title="pageProperties.navDisplay" :is_home="pageProperties.isNavInLandingPage"/>

  <RouterView/>
</template>


<style scoped>
  .task-navigation{
    margin-top: 2em;
    padding-top: 4em;
  }
</style>