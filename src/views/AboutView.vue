<script setup>
  import { reactive } from "vue";
  import NavBar from "../components/NavBar.vue";

  const homePageInd = false;
  const pageProperties = reactive({
    isNavInLandingPage : (homePageInd ? true : false),
    navDisplay: (homePageInd ? "To-Do" : "About")
  });
  

</script>

<template>
  <NavBar :title="pageProperties.navDisplay" :is_home="pageProperties.isNavInLandingPage"/>
  
</template>