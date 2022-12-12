import OutputView from "../views/OutputView.vue";
import InputView from "../views/InputView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "input",
      component: InputView,
    },
    {
      path: "/result",
      name: "output",
      component: OutputView,
    },
  ],
  linkExactActiveClass: "current",
});

export default router;
