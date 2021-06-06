import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:token",
    name: "Home",
    component: () => import("../Pages/PageHome.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!Object.keys(to.params || {}).length) {
    const token = generateToken();
    next({ path: `/${token}` });
    console.log(to);
  }
  next();
});

export default router;

function generateToken() {
  return Math.random()
    .toString(36)
    .slice(-8);
}
