<script setup>
  import Navbar from "./components/Navbar.vue";
  import Section1 from "./sectionPage/Section1.vue";
  import Section2 from "./sectionPage/Section2.vue";
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="content">
      <button class="chat">
        <img src="./assets/chat.svg" />
      </button>
      <Section1 />
      <Section2 />
    </div>
  </div>
</template>

<style scoped>
  .chat {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .chat img {
    height: 10vh;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  }
  .chat img:hover{
    height: calc(10vh + 10px);
    animation: popup 0.3s;
  }

@keyframes popup {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.15);
  }
  100%{
    transform: scale(1);
  }
}
</style>