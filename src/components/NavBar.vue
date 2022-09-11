<script setup>

  import { onMounted } from "vue";
  import { RouterLink } from 'vue-router'

  const props = defineProps(["title", "is_home"]);

  onMounted(() => {
    console.log("Our prop - Title => ", props.title);
    console.log("Our prop - Boolean => ", props.is_home);
  });

  function sayHi(task){
    alert(task);
  }

</script>

<template>
  <div v-if="props.is_home" class="navbar navbr-color">
    <p class="nav-title nav-fill nav-text navbr-color"><span v-html="props.title" class="navbr-color"></span></p>
    <RouterLink to="/about" class="nav-link nav-fill nav-text navbr-color"> &#9839;</RouterLink>
  </div>
  <div v-else class="navbar navbr-color">
    <RouterLink to="/" class="nav-title nav-fill nav-text navbr-color">&#x276E;</RouterLink>
    <p class="nav-link nav-fill nav-text navbr-color">{{props.title}}</p>
  </div>

  <div v-show="props.is_home" class="nav-options navbr-color">
    <div class="nav-fill text-center navbr-color nav-option-effect">
      <input class="text-box" v-model="message" placeholder="edit me" />
    </div>
    <div @click="$emit('newTodoItem', message)" class="nav-fill text-center navbr-color nav-option nav-option-effect">
      Add
    </div>
    <div class="nav-fill text-center navbr-color nav-option nav-option-effect">
      Undo
    </div>
  </div>
</template>

<style>
  
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

