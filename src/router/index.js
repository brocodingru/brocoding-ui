import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import Radiobutton from "@/views/Radiobutton.vue";
import Select from "@/views/Select.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/button",
    name: "Button",
    component: Button,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: Checkbox,
  },
  {
    path: "/radiobutton",
    name: "Radiobutton",
    component: Radiobutton,
  },
  {
    path: "/select",
    name: "Select",
    component: Select,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
