//import vue router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import PostsIndex from '../views/posts/index.vue'
import PostsCreate from '../views/posts/create.vue'
import PostsEdit from '../views/posts/edit.vue'


//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: PostsIndex
    },
    {
        path: '/create',
        name: 'posts.create',
        component: PostsCreate
    },
    {
        path: '/edit/:id',
        name: 'posts.edit',
        component: PostsEdit
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router