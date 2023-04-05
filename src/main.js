import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import vClickOutside from "click-outside-vue3";

createApp(App).use(vClickOutside).mount("#app");
