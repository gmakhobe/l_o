<script setup>

  import { RouterLink } from 'vue-router'

  const props = defineProps(["title", "is_home"]);
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

</template>

<style>
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

