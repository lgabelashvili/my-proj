import HomePage from '../pages/homePage';
import ContactPage from '../pages/contactPage';
import ProductsPage from '../pages/productsPage';

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
];

export default routes;
