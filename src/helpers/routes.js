import HomePage from '../pages/homePage';
import ContactPage from '../pages/contactPage';
import ProductsPage from '../pages/productsPage';
import ServicePage from '../pages/servicePage';

export const routes = [
  {
    name: 'Home',
    component: HomePage,
    path: '/',
  },
  {
    name: 'Products',
    component: ProductsPage,
    path: '/product/:productsName/:id?',
    isHiddenMenu: true,
  },
  {
    name: 'About Us',
    component: ContactPage,
    path: '/about',
  },
  {
    name: 'Contact',
    component: ContactPage,
    path: '/contact',
  },
  {
    name: 'Service Page',
    component: ServicePage,
    path: '/service',
    isHiddenMenu: true,
  },
];

export default routes;
