const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'paisajes', component: () => import('pages/PaisajePage.vue') },
      { path: 'aprendiendo', component: () => import('pages/AprendePage.vue') },
      { path: 'practicando-vue', component: () => import('pages/PracticandoVue.vue') },
      { path: 'reyes', component: () => import('pages/ReyesPage.vue') },
      { path: 'teach', component: () => import('pages/TeachVideo2.vue') },
      { path: 'semaforo', component: () => import('src/pages/SemaforoPractice.vue') },
      { path: 'contador', component: () => import('src/pages/ContadorClicks.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
