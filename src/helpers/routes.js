import HomePage from '../pages/homePage';
import ContactPage from '../pages/contactPage';

export const routes = [
  {
    name: 'Home',
    component: HomePage,
    path: '/',
  },
  {
    name: 'Products',
    component: ContactPage,
    path: '/contact',
  },
  {
    name: 'About Us',
    component: ContactPage,
    path: '/contact',
  },
  {
    name: 'Contact',
    component: ContactPage,
    path: '/contact',
  },
];

export default routes;
