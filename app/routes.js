import { Home, About } from './pages';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;
