<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="route.meta.transition || 'fade'"
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <keep-alive :max="2">        
        <component
          :is="Component"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
function beforeEnter() {
  console.log("transition beforeEnter");
}
function enter() {
  console.log("transition enter");
}
function afterEnter() {
  console.log("transition afterEnter");
}
function enterCancelled() {
  console.log("transition enterCancelled");
}
function beforeLeave() {
  console.log("transition beforeLeave");
}
function leave() {
  console.log("transition leave");
}
function afterLeave() {
  console.log("transition afterLeave");
}
function leaveCancelled() {
  console.log("transition leaveCancelled");
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
