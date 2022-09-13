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
  <div class="todo-list-layout">
    <p class="text-center">About<br/><br/>This is a to-do list app. It can create, update, undo and delete items from a list.<br/><br/>It was built using VueJS</p>
  </div>
</template>

<style scoped>
  .todo-list-layout{
    margin-top: 4em;
    padding-top: 2em;
    margin-bottom: 4em;
    padding-bottom: 2em;
  }

  .text-center{
    text-align: center;
  }
</style>