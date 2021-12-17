import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: async () => import("./components/Page1.vue"),
    beforeEnter: ()=>{
        console.log("page 1 route config beforeEnter");
    },
    meta: {
        transition:'fade',
        usePathKey:true
    },
  },
  {
    path: "/about/:id",
    component: async () => import("./components/Page2.vue"),
    beforeEnter: ()=>{
        console.log("page 2 route config beforeEnter");
    },
    meta: {
        transition:'fade',
        usePathKey:true
    },
  },

  ,
  {
    path: "/pull",
    component: async () => import("./components/Page3.vue"),
    beforeEnter: ()=>{
        console.log("page 3 route config beforeEnter");
    },
    meta: {
        transition:'fade',
        usePathKey:true
    },
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach(()=>{
    console.log("router beforeEach");
});

router.beforeResolve(()=>{
    console.log("router beforeResolve");
});

router.afterEach(()=>{
    console.log("router afterEach");
});




const app = createApp(App);
app.use(router);
app.mount("#app");
