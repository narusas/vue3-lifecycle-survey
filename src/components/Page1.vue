<template>
<div>
    hello1
    <br>
    <router-link to="/about/1">Page 2</router-link>
    <br>
    <router-link to="/pull">Page 3</router-link>

</div>
</template>

<script setup>
import {
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
  ref,
} from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

const id = "page1";
console.log(id+" setup");
onBeforeMount(() => {
  console.log(id + " onBeforeMount");
});

onMounted(() => {
  console.log(id + " onMounted");
});

onBeforeUpdate(() => {
  console.log(id + " onBeforeUpdate");
});

onUpdated(() => {
  console.log(id + " onUpdated");
});

onBeforeUnmount(() => {
  console.log(id + " onBeforeUnmount");
});

onUnmounted(() => {
  console.log(id + " onUnmounted");
});

onActivated(() => {
  console.log(id + " onActivated");
});
onDeactivated(() => {
  console.log(id + " onDeactivated");
});

onBeforeRouteLeave(() => {
  console.log(id + " onBeforeRouteLeave");
});

onBeforeRouteUpdate(() => {
  console.log(id + " onBeforeRouteUpdate");
});

onRenderTracked(()=>{
    console.log(id + " onRenderTracked");
})
onRenderTriggered(()=>{
    console.log(id + " onRenderTracked");
})
</script>