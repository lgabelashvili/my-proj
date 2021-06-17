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
    component: ContactPage,
    path: '/products',
  },
  {
    name: 'Product Page',
    component: ProductsPage,
    path: '/product/:productsName',
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
