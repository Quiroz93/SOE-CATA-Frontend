import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const MainLayout = () => import('../layouts/MainLayout.vue');
const ProgramasView = () => import('../features/programas/views/ProgramasView.vue');
const ProgramaDetalleView = () => import('../features/programas/views/ProgramaDetalleView.vue');
const OfertasView = () => import('../modules/ofertas/views/OfertasView.vue');
const OfertaDetalle = () => import('../modules/ofertas/views/OfertaDetalle.vue');
const PreinscripcionView = () => import('../features/preinscripcion/views/PreinscripcionView.vue');
const NotFound = () => import('../features/NotFound.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'WelcomeView',
        component: () => import('../views/WelcomeView.vue'),
      },
      {
        path: 'programas',
        name: 'ProgramasView',
        component: ProgramasView,
      },
      {
        path: 'programas/:id',
        name: 'ProgramaDetalleView',
        component: ProgramaDetalleView,
      },
      {
        path: '/preinscripcion/:programaId',
        name: 'PreinscripcionView',
        component: PreinscripcionView,
        props: true,
      },
      {
        path: 'ofertas',
        name: 'OfertasView',
        component: OfertasView,
      },
      {
        path: 'ofertas/:slug',
        name: 'OfertaDetalle',
        component: OfertaDetalle,
        props: true,
      },
    ],
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
