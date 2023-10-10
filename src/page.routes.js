const pageRoutes = [
  {
    name: 'shop All',
    route: 'shop',
  },
  {
    name: 'cottage communities',
    collapse: [
      {
        name: 'Grand bend',
        route: 'community/grand-bend/',
      },
      {
        name: 'fawn island',
        route: 'community/fawn-island/',
      },
      {
        name: 'wasaga beach',
        route: 'community/wasaga-beach/',
      },
      {
        name: 'view all',
        route: 'communities/',
      },
    ],
  },
  {
    name: 'Hoodies',
    route: 'product-category/hoodies/',
  },
  {
    name: 'T-shirts',
    route: 'product-category/t-shirts/',
  },
  {
    name: 'Youth',
    collapse: [
      {
        name: 'T-Shirts',
        route: 'product-category/youth/t-shirts-youth/',
      },
      {
        name: 'Hoodies',
        route: 'product-category/youth/hoodies-youth/',
      },
    ],
  },
];

export default pageRoutes;
