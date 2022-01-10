import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
  },
  {
    path: "/cars",
    name: "Cars",
    component: () => import(/* webpackChunkName: "cars" */ "../views/Cars.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cars" */ "../views/Cart.vue"),
  },
  {
    path: "/cars/:carId",
    name: "CarDetails",
    component: () =>
      import(/* webpackChunkName: "cars" */ "../views/CarDetails.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: () =>
      import(
        /* webpackChunkName: "change-password" */ "../views/ChangePassword.vue"
      ),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/Orders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
