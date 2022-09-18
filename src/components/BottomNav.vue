<script setup>
  import { ref } from "vue"
  
  const props = defineProps(["is_home"]);
  const emit = defineEmits(["newTodoItem","undo"]);
  const message = ref("");

  // Add item to list
  function onAdd(){
    const todoTask = `${message.value}`;

    if (message.value) {
      emit('newTodoItem', todoTask)
      message.value = "";
    }
  }

  // add previous snapshot to reactive todoList
  function onUndo(){
    emit('undo', "undo");
  }
</script>

<template>

<div v-show="props.is_home" class="nav-options navbr-color">
    <div class="nav-fill text-center navbr-color nav-option-effect">
      <input class="text-box" v-model="message" placeholder="Type task" />
    </div>
    <div @click="onAdd()" class="nav-fill text-center navbr-color nav-option nav-option-effect">
      <span class="action-icon bg">&#9997;</span> Add
    </div>
    <div @click="onUndo()" class="nav-fill text-center navbr-color nav-option nav-option-effect">
      <span class="action-icon bg">&cularr;</span> Undo
    </div>
  </div>
  
</template>

<style scoped>
.bg {
    background-color: #4C0033;
  }

  .action-icon{
    font-size: 1em;
  }
  
  .text-box {
    width: 100%;
    height: 100%;
    margin:0px;
    padding: 0px;
  }
  .nav-option {
    padding-top: 1em;
  }

  .nav-option-effect:hover{
    background-color: #AF0171;
    border: 1px solid white;
  }

  .nav-options{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3em;
  }

  .nav-text {
    font-size: 2em;
    text-decoration-line: none;
    padding: 10px;
    color: white;
  }

  .text-center{
    text-align: center;
  }

  .nav-link {
    text-align: right;
  }
  .nav-title {
    text-align: left;
  }

  .nav-fill {
    flex: 1 1 auto;
  }

  .navbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    width: 100%;
    top: 0;
  }
  .navbr-color{
    background-color: #4C0033;
  }
</style>
