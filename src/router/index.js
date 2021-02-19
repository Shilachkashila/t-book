import Vue from "vue";
import VueRouter from "vue-router";
// 1. Определяем компоненты для маршрутов.
// Они могут быть импортированы из других файлов
// import Home from "@/views/Home";

Vue.use(VueRouter);

// 2. Определяем несколько маршрутов
// Каждый маршрут должен указывать на компонент.
// "Компонентом" может быть как конструктор компонента, созданный
// через `Vue.extend()`, так и просто объект с опциями компонента.
const routes = [
  {
    path: "/Phone-book",
    component: () => import("@/views/Phone-book")
  },
  {
    path: "/Home",
    component: () => import("@/views/Home")
  }

];

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
