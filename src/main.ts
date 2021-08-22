import { createApp, defineCustomElement } from "vue";
import App from "./App.ce.vue";
import store from "@/store";
import router from "@/router";

// just for testing
createApp(App).use(store).use(router).mount("#app");

// create custom-element
const MyVueElement = defineCustomElement(App);
customElements.define("my-vue-element", MyVueElement);
