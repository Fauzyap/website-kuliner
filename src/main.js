import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/assets/css/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faBagShopping);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount("#app");
