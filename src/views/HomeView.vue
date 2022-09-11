<script setup>
  import { reactive, ref } from "vue";
  import { RouterView } from 'vue-router'
  import NavBar from "../components/NavBar.vue";

  const homePageInd = true;
  const pageProperties = reactive({
    isNavInLandingPage : (homePageInd ? true : false),
    navDisplay: (homePageInd ? "&#x2611; To-Do" : "About")
  });
  const todoList = ref([
    {
      note: "Task 2 this is for doing something 2",
      checked: true,
      date: "Sun Sep 11 2022 16:28:05 GMT+0200 (South Africa Standard Time)"
    },
    {
      note: "Task 2 this is for doing something 2 and just to see, I am writing this to observe hwo the layout grows",
      checked: false,
      date: "Sun Sep 11 2022 16:29:05 GMT+0200 (South Africa Standard Time)"
    }
  ]);

  function addItemToTheList(value){
    todoList.value.splice(0, 0, {
      note: value,
      checked: false,
      date: `${new Date}`
    });
  }

  function checkItemOnToDoList(indicator){
    todoList.value.map(item => {
      if (indicator == item.date)
        item.checked = true;
      return item;
    });
  }

  function unCheckItemOnToDoList(indicator){
    todoList.value.map(item => {
      if (indicator == item.date)
        item.checked = false;
      return item;
    });
  }

  function deleteItemOnToDoList(indicator){
    todoList.value = todoList.value.filter(item => indicator != item.date)
  }
  
</script>

<template>
  <NavBar @newTodoItem="addItemToTheList" :title="pageProperties.navDisplay" :is_home="pageProperties.isNavInLandingPage"/>

  <div class="todo-list-layout">
    <div v-for="item in todoList" class="list-thumbnail-holder bg">
      <p @click="checkItemOnToDoList(item.date)" v-if="item.checked ? false : true" class="list-fill bg list-padding-margin">&#x2610;</p>
      <p @click="unCheckItemOnToDoList(item.date)" v-if="item.checked ? true : false" class="list-fill bg list-padding-margin">&#x2611;</p>
      <p class="list-fill bg list-padding-margin">{{ item.note }}</p>
      <p @click="deleteItemOnToDoList(item.date)" class="list-fill bg list-padding-margin">&#x2716;</p>
    </div>
  </div>

</template>


<style scoped>
  .todo-list-layout{
    margin-top: 4em;
    padding-top: 2em;
    margin-bottom: 4em;
    padding-bottom: 2em;
  }

  .bg {
    background-color: #4C0033;
  }

  .list-thumbnail-holder{
    display: flex;
    margin: 0.5em;
    padding: 1em;
  }

  .list-padding-margin {
    margin: 0.4em;
    padding: 0.4em;
  }

  .list-fill {
    flex: 1 1 auto;
  }
</style>