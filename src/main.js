import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NavBar from "./components/NavBar.vue";
import "./assets/style/index.css";

const app = createApp(App);

app.component('NavBar', NavBar);

app.use(store).use(router).mount("#app");
