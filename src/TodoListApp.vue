<script setup>
  import { reactive } from "vue";
  import { RouterView } from 'vue-router'
  import NavBar from "./components/NavBar.vue";
  import { userRoute } from "vue-router"

  const homePageInd = 1;
  const pageProperties = reactive({
    isNavInLandingPage : (homePageInd ? true : false),
    navDisplay: (homePageInd ? "To-Do" : "About")
  });
  
  

</script>

<template>
  <NavBar :title="pageProperties.navDisplay" :is_home="pageProperties.isNavInLandingPage"/> 

  <RouterView/>
</template>


<style scoped>
  
</style>