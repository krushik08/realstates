import React from 'react';
import Hero from './hero';
import ProductShowcase from '../../components/ProductShowcase';
import TagShowcase from '../../components/TagShowcase';
import ImageWithCaption from '../../components/ImageWithCaption';
const tShirt = [
  {
    name: 'Fawn Island News Clippings T-Shirt',
    url: 'shop/apparel/fawn-island-floaty-skeleton-champion-hoodie/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/18182-12.jpg',
    price: 27.99,
  },
  {
    name: 'Grand Bend Day Drinking Club Short Sleeve Tee',
    url: 'shop/apparel/grand-bend-day-drinking-club-short-sleeve-tee/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/38608-297.jpg',
    price: 29.99,
  },
  {
    name: 'Fawn Island Dock Drinks T-Shirt',
    url: 'shop/apparel/fawn-island-dock-drinks-t-shirt/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/18550-265.jpg',
    price: 24.99,
  },
  {
    name: 'Grand Bend Speedway Wheel T-Shirt',
    url: 'shop/apparel/grand-bend-speedway-wheel-t-shirt/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/18542-1254.jpg',
    price: 24.99,
  },
];
const hoodiesList = [
  {
    name: 'Fawn Island Floaty Skeleton Champion™ Hoodie',
    url: 'shop/apparel/fawn-island-floaty-skeleton-champion-hoodie/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/68869-56.jpg',
    price: 60,
  },
  {
    name: 'Grand Bend Modern Hoodie',
    url: 'shop/apparel/grand-bend-modern-hoodie/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/42166-135.jpg',
    price: 44.99,
  },
  {
    name: 'Fawn Island Dock Drinks T-Shirt',
    url: 'shop/apparel/grand-bend-lost-bear-hoodie/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/42221-318.jpg',
    price: 49.99,
  },
  {
    name: 'Fawn Island Vertical Champion™ Hoodie',
    url: 'shop/hoodies/fawn-island-vertical-champion-hoodie/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/68871-44.jpg',
    price: 59.99,
  },
];
const accessoriesList = [
  {
    name: 'Grand Bend Green Preppy Natural Tote Bag',
    url: 'shop/apparel/grand-bend-green-preppy-natural-tote-bag/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/82432.jpg',
    price: '19.99',
  },
  {
    name: 'Fawn Island Patch Baseball Cap',
    url: 'shop/apparel/fawn-island-patch-baseball-cap/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/82433-37.jpg',
    price: '24.99',
  },
  {
    name: 'Grand Bend Modern Baseball Cap',
    url: 'shop/apparel/grand-bend-modern-baseball-cap/',
    image: '',
    price: '24.99',
  },
  {
    name: 'Fawn Island Preppy Baseball Cap',
    url: 'shop/apparel/fawn-island-preppy-baseball-cap/',
    image: '',
    price: '24.99',
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <ProductShowcase title="Featured Hoodies" product={hoodiesList} />
      <TagShowcase />
      <ProductShowcase title="Trending Tees" product={tShirt} />
      <ImageWithCaption />
      <ProductShowcase title="Trending Accessories" product={accessoriesList} />
    </>
  );
};

export default Home;
