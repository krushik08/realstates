import React from 'react';
import Hero from './hero';
import ProductShowcase from '../../components/ProductShowcase';
import TagShowcase from '../../components/TagShowcase';
import ImageWithCaption from '../../components/ImageWithCaption';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <TagShowcase />
      <ProductShowcase />
      <ImageWithCaption />
      <ProductShowcase />
    </>
  );
};

export default Home;
