import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
})
export {router};