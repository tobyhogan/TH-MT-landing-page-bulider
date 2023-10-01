import { createRouter, createWebHistory } from "vue-router";

const EditorPage = () => import("@/pages/EditorPage.vue");
const HostedLandingPage = () => import("@/pages/HostedLandingPage.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "editor",
            component: EditorPage
        },
        {
            path: "/page/:pageName",
            name: "landing-page",
            component: HostedLandingPage
        },
    ]
});

export default router;
