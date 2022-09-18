<script setup>
  import { onBeforeMount, reactive, ref } from "vue";
  import { RouterView } from 'vue-router'
  import NavBar from "../components/NavBar.vue";
  import BottomNav from "../components/BottomNav.vue";
  import { useTodoList } from "../stores/todoList"

  const homePageInd = true;
  const todoList = useTodoList();
  const serverError = ref(false);
  const pageProperties = reactive({
    isNavInLandingPage : (homePageInd ? true : false),
    navDisplay: (homePageInd ? "&#x2611; To-Do" : "About")
  });
  
  function addItemToTheList(value){
    todoList.addItem(value);
    value = "";
  }

  function checkItemOnToDoList(indicator){
    todoList.checkItem(indicator);
  }

  function unCheckItemOnToDoList(indicator){
    todoList.unCheckItem(indicator);
  }

  function deleteItemOnToDoList(indicator){
    todoList.removeItem(indicator);
  }

  function undoFunction(){
    todoList.undoFunction();
    console.log("undoFunction clicked");
  }

  onBeforeMount(() => {
    fetch("http://192.168.8.100:5678/data/lo/list")
    .then((response) => {
      console.log("Response Status =>", response.status);
      switch(response.status){
        case 500:
            const isTrue = true;
            serverError.value = isTrue;
          break;
        case 204:
            todoList.todoList = [];
          break;
        case 200:
            return response.json()
          break;
      }
    })
    .then((data) => {
      todoList.todoList = data.data;
    })
    .catch((error) => {
      console.log("Error =>", error);
    })
  });
</script>

<template>
  <div v-if="!serverError">
    <NavBar :title="pageProperties.navDisplay" :is_home="pageProperties.isNavInLandingPage"/>
    <BottomNav @undo="undoFunction" @newTodoItem="addItemToTheList" :is_home="pageProperties.isNavInLandingPage"/>

    <div v-if="todoList.todoList.length != 0" class="todo-list-layout">
      <div v-for="item in todoList.todoList" class="list-thumbnail-holder bg">
        <p @click="checkItemOnToDoList(item.date)" v-if="item.checked ? false : true" class="list-fill bg list-padding-margin">&#x2610;</p>
        <p @click="unCheckItemOnToDoList(item.date)" v-if="item.checked ? true : false" class="list-fill bg list-padding-margin">&#x2611;</p>
        <p @click="checkItemOnToDoList(item.date)" v-if="item.checked ? false : true" class="list-fill bg list-padding-margin">{{ item.note }}</p>
        <p @click="unCheckItemOnToDoList(item.date)" v-if="item.checked ? true : false" class="list-fill bg list-padding-margin strike">{{ item.note }}</p>
        <div class="bg">
          <p class="bg list-padding-margin text-right">&#x2710;</p>
          <p @click="deleteItemOnToDoList(item.date)" v-if="item.checked ? false : true" class="list-fill bg list-padding-margin text-right">&#x2716;</p>
          <p @click="deleteItemOnToDoList(item.date)" v-if="item.checked ? true : false" class="list-fill bg list-padding-margin text-right strike">&#x2716;</p>
        </div>
      </div>
    </div>

    <div v-if="todoList.todoList.length == 0" class="todo-list-layout">
      <p class="bg text-center empty-list-text"><span class="empty-list-icon bg">&#9996;</span><br/>Nothing to-do</p>
    </div>
    
  </div>

  <div v-if="serverError" class="todo-list-layout text-center bg">
    <p class="bg server-error-icon">&#x2639;</p>
    <p class="bg">Internal Server Error</p>
  </div>

</template>


<style scoped>
  .server-error-icon{
    font-size: 5em;
  }
  .empty-list-icon{
    font-size: 4em;
  }
  .text-right {
    text-align: right;
  }

  .empty-list-text{
    padding: 1em;
    margin: 2em;
  }

  .text-center{
    text-align: center;
  }

  .strike {
    text-decoration: line-through underline;
  }

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