import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"
import Link from "@/components/Link.vue";
import Login from "@/components/Login.vue";
import Registrasi from "@/components/Register.vue";
import Navbar from "@/components/Navbar.vue";

Vue.use(Router)

function configRouters() {
    return [
        {
            path: "/",
            name: "Helloworld",
            component: HelloWorld
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: " Registrasi",
            component: Registrasi
        },

        {
            path: "/link",
            name: "Link",
            component: Link
        },
        {
            path: "/navbar",
            name: "Navbar",
            component: Navbar
        },
    ]
}

const link = new Router({
    mode: "history",
    routes: configRouters(),
})

export default link;
