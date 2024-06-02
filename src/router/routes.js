const routes = [
  {
    path: "/",
    name: "重定向",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "主页",
    component: () => import("@/views/index.vue"),
  },
];

export default routes;
