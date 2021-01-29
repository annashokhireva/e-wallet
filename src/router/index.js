import Vue from "vue";
import VueRouter from "vue-router";
import ActiveCards from "../views/ActiveCards";
import AddCard from "../views/AddCard"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "activeCards",
    component: ActiveCards
  },
  {
    path: "/add-card",
    name: "addCard",
    component: AddCard
  }
];

const router = new VueRouter({
  routes
});

export default router;
