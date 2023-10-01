import "./assets/tailwind.css";
import "whatwg-fetch"; // polyfill for fetch, needed for unsplash-js

import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast, { type PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
const toastOptions: PluginOptions = {
    position: POSITION.TOP_CENTER,
    maxToasts: 3,
    hideProgressBar: true,
    draggable: false,
    toastClassName: "custom",
};

app.use(createPinia())
    .use(router)
    .use(Toast, toastOptions);

app.mount("#app");
