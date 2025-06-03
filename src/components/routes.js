import Home from "./Home.vue";
import SignUp from "./SignUp.vue";
import Login from "./Login.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";
import Manage from "./Manage.vue";
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    { name: 'Home',path: '/', component: Home },
    { name: 'SignUp',path: '/signup', component: SignUp },
    { name: 'Login', path: '/login', component: Login },
    { name: 'About', path: '/about', component: About },
    { name: 'Contact', path: '/contact', component: Contact },
    { name: 'Manage', path: '/manage', component: Manage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
