import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlNpbHZpbyBTYW50b3MiLCJlbWFpbCI6InNpbHZpb0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzE1MDI3MTM2LCJleHAiOjE3MTUyODYzMzZ9.bMY7WuZYBe868c6s0LpSIO_Sg-E6TlK-zYaOFv9Lky8";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
