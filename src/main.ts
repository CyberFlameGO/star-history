import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import router from "./router";
import App from "./App.vue";
import { piniaInstance } from "./store";
import "./css/index.css";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(piniaInstance);
app.use(head);

app.mount("#app");
