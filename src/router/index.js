// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import InfoTable from "../views/InfoTable.vue";
// import FamilyTree from "../views/FamilyTree.vue";
// import Edit from "../views/Edit.vue";
// import Create from "../views/Create.vue";

// const routesArray = ['Test', 'Chicago', 'DuBois', 'Norden', 'Trave', 'Romeo', 'Ogdensburg', 'Arbra', 'Hudiksvall', 'NewYorkCity', 'Bremen', 'Liverpool', 'Hamburg', 'Britannic', 'PassengerList', 'Göteborg', 'Albany', 'Hull', 'HeadStones', 'PassengerTraffic', 'InfoTable',  'PhotoPages', 'PhotoPages2', 'ImageContainers', 'Blog', 'Links','FigureSlide', 'RomeoList', 'Britpasslist']


// const routes = [
//   { path: "/InfoTable", name: "/InfoTable", component: InfoTable },
//   { path: "/", name: "FamilyTree", component: FamilyTree },
//   // {
//   //   path: "/",
//   //   name: "/HomeView",
//   //   component: () =>
//   //   import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
//   // },
//   {
//     name: "Create",
//     path: "/create",
//     component: Create,
//         meta: {
//       requiresAuth: true
//     }
//   },
// {
//   path: '/FamilyPage',
//   name: '/FamilyPage',
//   component: () => import('@/views/FamilyPage.vue')
// },
// {
//   path: '/FamilyHistory',
//   name: '/FamilyHistory',
//   component: () => import('@/views/FamilyHistory.vue')
// },
//   {
//     name: "Edit",
//     path: "/edit/:id",
//       component: Edit,
//         meta: {
//       requiresAuth: true
//     }
//   },

//   {
//     path: "/about",
//     name: "about",
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
//   {
//     path: "/DaBoys",
//     name: "DaBoys",
//     component: () =>
//       import("@/views/DaBoys.vue"),
//   },

// ];

// // add remainder of routes from routesArray
// routesArray.forEach(buildRoutes)
// function buildRoutes(route) { routes.push({ name: '/' + route, path: '/' + route, component: () => import('@/views/' + route + '.vue') }) }

// router/index.js

import { createRouter, createWebHistory } from "vue-router";

// 1. Manually define special routes
const staticRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/FamilyHistory.vue')
  }
];

// 2. Dynamically generate routes from the /views folder
const viewModules = import.meta.glob('@/views/*.vue');

const dynamicRoutes = Object.entries(viewModules).map(([path, loader]) => {
  const name = path.split('/').pop().replace('.vue', '');
  return {
    path: '/' + name,
    name: '/' + name,
    component: loader
  };
});

// 3. Combine them
const routes = [...staticRoutes, ...dynamicRoutes];

// 4. Create the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;