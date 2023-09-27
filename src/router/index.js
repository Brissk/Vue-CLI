import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import Project from '@/views/Project.vue'
import BlogDetails from '@/views/BlogDetails.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'
import PageNotExist from '@/views/PageNotExist.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    meta: { layout: 'empty' },
    // component: () => import('./views/Login.vue')
    component: Blog
  },
  {
    path: '/project',
    name: 'project',
    meta: { layout: 'main' },
    // component: () => import('./views/Categories.vue')
    component: Project
  },
  {
    path: '/blog_details',
    name: 'blogDetails',
    meta: { layout: 'main' },
    // component: () => import('./views/Categories.vue')
    component: BlogDetails
  },
  {
    path: '/project_details',
    name: 'projectDetails',
    meta: { layout: 'main' },
    // component: () => import('./views/Categories.vue')
    component: ProjectDetails
  },
  {
    path: '/404',
    name: 'PageNotExist',
    component: PageNotExist,
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
