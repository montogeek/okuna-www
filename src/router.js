import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home/home.vue';
import aboutUs from './views/about-us/about-us.vue';
import manifesto from './views/manifesto/manifesto.vue';
import contactUs from './views/contact-us/contact-us.vue';
import faq from './views/faq/faq.vue';
import jobs from './views/jobs/jobs.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: aboutUs
        },
        {
            path: '/manifesto',
            name: 'manifesto',
            component: manifesto
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: contactUs
        },
        {
            path: '/faq',
            name: 'faq',
            component: faq
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: jobs
        }
    ]
})