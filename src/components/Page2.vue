<template>
  <div>
    hello2 {{ count }}
    <br />
    <router-link to="/">Page 1</router-link>
    <br />

    <router-link to="/about/1">Page 2-1</router-link>
    <router-link to="/about/2">Page 2-2</router-link>
    <router-link to="/about/3">Page 2-3</router-link>

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
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
const count = ref(0);
setInterval(()=>{
    nextTick(()=>{
        count.value = count.value +1;
    })
},1000)

const id = "page2";
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
