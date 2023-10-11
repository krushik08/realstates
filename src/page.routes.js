import Communities from './page/Communities';
import Home from './page/home';
import Products from './page/products';

const pageRoutes = [
  {
    route: '/',
    component: <Home />,
  },
  {
    name: 'Shop All',
    route: 'shop',
    component: <Products />,
  },
  {
    name: 'cottage communities',
    collapse: [
      {
        name: 'Grand bend',
        route: 'community/grand-bend',
        component: <Products />,
      },
      {
        name: 'fawn island',
        route: 'community/fawn-island',
        component: <Products />,
      },
      {
        name: 'wasaga beach',
        route: 'community/wasaga-beach',
        component: <Products />,
      },
      {
        name: 'view all',
        route: 'communities',
        component: <Communities />,
      },
    ],
  },
  {
    name: 'Hoodies',
    route: 'product-category/hoodies',
    component: <Products />,
  },
  {
    name: 'T-shirts',
    route: 'product-category/t-shirts',
    component: <Products />,
  },
  {
    name: 'Youth',
    collapse: [
      {
        name: 'T-Shirts',
        route: 'product-category/youth/t-shirts-youth',
        component: <Products />,
      },
      {
        name: 'Hoodies',
        route: 'product-category/youth/hoodies-youth',
        component: <Products />,
      },
    ],
  },
  {
    icon: 'search',
  },
  {
    icon: 'instagram',
    route: '',
  },
  {
    icon: 'cart',
    route: 'cart/',
  },
];

export default pageRoutes;
